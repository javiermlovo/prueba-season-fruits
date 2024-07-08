import { Col, Row } from 'react-bootstrap';
import { FruitInfo,Fruits } from '../interfaces/interfaces';
import Collapse from 'react-bootstrap/Collapse';
import { useEffect, useState } from 'react';
import { IoIosArrowDropup } from "react-icons/io";

function NutritionsFruit({fruit}:Fruits) {
    const [open, setOpen] = useState(true);
    const [disable,setDisable] = useState(false)

    useEffect(() => {
        function myFunction(x:MediaQueryList) {
            if (x.matches) { // If media query matches
                setOpen(false);
                setDisable(false)
            } else {
                setOpen(true);
                setDisable(true)
            }
        }
        
        // Create a MediaQueryList object
        const x = window.matchMedia("(max-width: 991px)")
        // Call listener function at run time
        myFunction(x);
        
        // Attach listener function on state changes
        x.addEventListener("change", function() {
            myFunction(x);
        });

    }, [disable]);
    let fat:number=0;
    let calories:number=0;
    let carbohydrates:number=0;
    let sugar:number=0;
    let protein:number=0;
    fruit.map((f:FruitInfo)=>{
        fat = parseFloat((fat + f.nutritions.fat).toFixed(2));
        calories = parseFloat((calories + f.nutritions.calories).toFixed(2));
        carbohydrates = parseFloat((carbohydrates + f.nutritions.carbohydrates).toFixed(2));
        sugar = parseFloat((sugar + f.nutritions.sugar).toFixed(2));
        protein = parseFloat((protein + f.nutritions.protein).toFixed(2));
    })
    return (
        <Row className='me-0 nutrition py-4'>
            <Col xs={12} className='px-4 pt-2 mb-lg-3'>
                <button 
                    className="nutrition--btn" 
                    disabled={disable}
                    type="button" 
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    General information <IoIosArrowDropup className='d-lg-none ms-4 icon' />
                </button>
            </Col>
            <Collapse className="col-12 px-4 pb-2" in={open}>
                <Row >
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>No. of Found Products:</p><p className='mb-0 nutrition--description'>{fruit.length}</p></Col>
                    <Col xs={12} className='mb-3'><h5 className='nutrition--subtitle mb-0'>Nutritional properties of found products</h5></Col>
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>Total calories</p><p className='mb-0 nutrition--description'>{calories}</p></Col>
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>Total fats</p><p className='mb-0 nutrition--description'>{fat}</p></Col>
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>Total sugar</p><p className='mb-0 nutrition--description'>{sugar}</p></Col>
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>Total carbohydrates</p><p className='mb-0 nutrition--description'>{carbohydrates}</p></Col>
                    <Col xs={12} className='mb-3 d-flex justify-content-between'><p className='mb-0 nutrition--description nutrition--description__title'>Total proteins</p><p className='mb-0 nutrition--description'>{protein}</p></Col>
                </Row>
            </Collapse>
        </Row>
    )
}

export default NutritionsFruit