import React, {useState,useEffect} from 'react'
import RestuarantCards from './RestuarantCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestuarantListAction} from '../Action/restuarantListAction';
import { useDispatch, useSelector } from 'react-redux';

function Restuarantlist() {
    // create state to hold all restuarant
    const [allRestuarants,setRestuarant] = useState([])

    // function to call api to get all restuarant
    // const getRestuarant = async ()=>{
    //    await fetch('/restaurants.json')
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=>{
    //             setRestuarant(result.restaurants);
    //         })
    //     })
    // }
    const dispatch = useDispatch()
    const result = useSelector(state=>state.restuarantReducer)
  
    const {restuarantList} = result
    
    useEffect(()=>{
        // getRestuarant()
        dispatch(RestuarantListAction())
    },[])
  return (
    <Row>
      {
      restuarantList.map(item=>(
       <Col sm={12} md={6} lg={4} xl={3}> 
       <RestuarantCards restuarant={item}/> 
       </Col>
      ))

      }
    </Row>
  )
}

export default Restuarantlist