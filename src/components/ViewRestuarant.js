import React ,{useState,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import {useParams} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import RestOp from './RestOp';
import RestReview from './RestReview';


function ViewRestuarant() {
    const params = useParams()
    console.log(params.id);
    const [allRestuarants,setRestuarant] = useState([])

// function to call api to get all restuarant
const getRestuarant = async ()=>{
  await fetch('/restaurants.json')
   .then((data)=>{
       data.json()
       .then((result)=>{
           setRestuarant(result.restaurants);
       })
   })
}
     useEffect(()=>{
      getRestuarant()
    },[])

    // console.log(allRestuarants);     

    const viewRest = allRestuarants.find(item=>item.id==params.id)
    console.log(viewRest);

  return (
    <>
    {
      viewRest ? (
        <Row className='p-3'>
          <Col lg={3}>
          <Image src={viewRest.photograph} fluid />
          </Col>  
          <Col>
          <p>Id: {viewRest.id}</p>
          <h2> {viewRest.name}</h2>
          <h5>Cusine : {viewRest.cuisine_type}</h5>
          <h5> Neighborhood: {viewRest.neighborhood}</h5>
          <h6>Address: {viewRest.address}</h6>
          <RestOp operate={viewRest.operating_hours}  />          <br></br>

          <RestReview reviews={viewRest.reviews}/>
          </Col>  
        </Row>
      ):'null'
    }
    </>
  )
}

export default ViewRestuarant
  


 