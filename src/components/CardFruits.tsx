import {Card, Row, Col} from 'react-bootstrap';
import { Fruit } from '../interfaces/interfaces';
import defaultImage from '/not-available.webp';
import { IoHeartCircle, IoHeart } from "react-icons/io5";
import { useState } from 'react';


function CardFruits({fruit}:Fruit) {
  const placeholderImage = defaultImage
  const [favorite, setFavorite] = useState(false);
  const [favoriteCss, setFavoriteCss] = useState("");
    return (
      <Card className='cardFruit'>
        <Card.Img 
          className={`cardFruit--image position-relative`}
          variant="top" 
          alt={fruit.name} 
          src={`${fruit.name}.webp`} 
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=placeholderImage;
          }}
        >
        </Card.Img>
        <button 
          className={`cardFruit--btnFav ${favoriteCss}`}
          onClick={()=> {
            if(!favorite){
              setFavoriteCss('favorite')
            } else {
              setFavoriteCss('')
            }
            setFavorite(!favorite)
          }}  
        >
        {(favorite === true)?
          <IoHeart />
          :
          <IoHeartCircle />
        }
          </button>
        <Card.Body className='p-4'>
          <Card.Title className='cardFruit--title pb-2 mb-0'>{fruit.name}</Card.Title>
          <Row>
            <Col className='pb-2 mb-0'>
              <Row>
                <Col xs={12}><p className='mb-2 cardFruit--description cardFruit--description__title'>Family:</p></Col>
                <Col xs={12}><p className='mb-0 cardFruit--description'>{fruit.family}</p></Col>
              </Row>
            </Col>
            <Col className='pb-2 mb-0'>
              <Row>
                <Col xs={12}><p className='mb-2 cardFruit--description cardFruit--description__title'>Order:</p></Col>
                <Col xs={12}><p className='mb-0 cardFruit--description'>{fruit.order}</p></Col>
              </Row>
            </Col>
            <Col className='pb-2 mb-0'>
              <Row>
                <Col xs={12}><p className='mb-2 cardFruit--description cardFruit--description__title'>Genus:</p></Col>
                <Col xs={12}><p className='mb-0 cardFruit--description'>{fruit.genus}</p></Col>
              </Row>
            </Col>
            <Col xs={12} className='pb-2 mb-0 cardFruit--subtitle'>Nutritions</Col>
            <Col xs={12} className='d-flex justify-content-between pb-2 mb-0'><p className='mb-0 cardFruit--description cardFruit--description__title'>Calories</p><p className='mb-0 cardFruit--description'>{fruit.nutritions.calories}</p></Col>
            <Col xs={12} className='d-flex justify-content-between pb-2 mb-0'><p className='mb-0 cardFruit--description cardFruit--description__title'>Fats</p><p className='mb-0 cardFruit--description'>{fruit.nutritions.fat}</p></Col>
            <Col xs={12} className='d-flex justify-content-between pb-2 mb-0'><p className='mb-0 cardFruit--description cardFruit--description__title'>Sugar</p><p className='mb-0 cardFruit--description'>{fruit.nutritions.sugar}</p></Col>
            <Col xs={12} className='d-flex justify-content-between pb-2 mb-0'><p className='mb-0 cardFruit--description cardFruit--description__title'>Carbohydrates</p><p className='mb-0 cardFruit--description'>{fruit.nutritions.carbohydrates}</p></Col>
            <Col xs={12} className='d-flex justify-content-between mb-0'><p className='mb-0 cardFruit--description cardFruit--description__title'>Proteins</p><p className='mb-0 cardFruit--description'>{fruit.nutritions.protein}</p></Col>
          </Row>
        </Card.Body>
      </Card>
    );
}

export default CardFruits