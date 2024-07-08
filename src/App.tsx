import './App.css'
import CardFruits from './components/CardFruits'
import TitleFruits from './components/TitleFruits';
import axios from "axios"; 
import {Container, Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FruitInfo } from './interfaces/interfaces';
import NutritionsFruit from './components/Nutrition';

function App() {
  const [fruits,setFruits] = useState([]);
  const [cardsViews, setCardsViews] = useState(8);
  const [filter, setFilter] = useState('0');
  const [api, setApi] = useState('api/fruit/all/');
  const [apiComplement, setApiComplement] = useState('')

  useEffect(() => {
    const url = api+apiComplement
    axios.get(url)
    .then(res =>{
      setFruits(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [apiComplement]);
  return (
  <Container fluid className='max-width'>
    <Row>
      <header className="col-12">
        <TitleFruits/>
      </header>
      <main className="col-12 col-lg-8 col-xl-9">
        <Row>
          <Col xs={12} className='filter mb-4'>
            <Row className='justify-content-end'>
              <Col className='col-auto'>
                <select 
                  className='filter--select'
                  name="filter" 
                  id="filter"
                  defaultValue="0"
                  onChange={event => {
                    setFilter(event.target.value)
                    if(event.target.value === '0'){
                      setApi('api/fruit/all/')
                    } else if (event.target.value === '1'){
                      setApi('api/fruit/family/')
                    } else if (event.target.value === '2'){
                      setApi('api/fruit/order/')
                    }else if (event.target.value === '3'){
                      setApi('api/fruit/genus/')
                    }
                    console.log (filter);
                  }}
                >
                  <option disabled value="0">Filter by:</option>
                  <option value="1">Family</option>
                  <option value="2">Order</option>
                  <option value="3">Genus</option>
                </select>
              </Col>
              <Col className='col-auto position-relative'>
                <input className='filter--input' type="text" placeholder='Search' onChange={event=>{
                  setApiComplement(event.target.value)
                }}/>
              </Col>
              <Col className='col-auto'>
                <button className='filter--btn'>Order A - Z</button>
              </Col>
            </Row>
          </Col>
          {fruits.slice(0, cardsViews).map(function(fruit:FruitInfo){
              return (
                <article className='col-12 col-md-6 col-xxl-4 mb-4 d-flex justify-content-center' key={fruit.id}>
                  <CardFruits fruit={fruit}/>
                </article>
              )
          })}
          <Col xs={12} className='d-flex justify-content-center mb-5 pb-5'>
            <button onClick={()=> setCardsViews((cardsViews:number)=>cardsViews+4)}>SEE MORE</button>
          </Col>
        </Row>
      </main>
      <aside className="col-12 col-lg-4 col-xl-3 aside">
        <NutritionsFruit fruit={fruits.slice(0, cardsViews)}/>
      </aside>
    </Row>
  </Container>
  )
}

export default App
