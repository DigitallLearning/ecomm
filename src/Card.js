
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
function Card()
{
    const location=useLocation()
     const [apidata,setapidata]=useState({})
    console.log(location.state)
   useEffect(()=>{
             fetch("https://fakestoreapi.com/products/"+location.state).then((result)=>{
               console.log(result)
               result.json().then((data)=>{
                   console.log(data)
                   setapidata(data)
               })
             })
       },[])
   return(
    <div>
        <MDBCard className='mb-3' style={{margin:"50px"}}>
        <MDBCardImage position='top' src={apidata.image} alt='...' style={{width:"300px",height:"300px"}}/>
        <MDBCardBody>
          <MDBCardTitle>{apidata.title}</MDBCardTitle>
          <MDBCardTitle style={{color:"red"}}>{apidata.price*80} Rs</MDBCardTitle>
          <MDBCardTitle style={{color:"green"}}>{apidata.category}</MDBCardTitle>
          {/* <MDBCardTitle style={{color:"blue"}}>{apidata.rating.rate}</MDBCardTitle> */}
          {/* <MDBCardTitle style={{color:"orange"}}>{apidata.rating.count}</MDBCardTitle> */}
          <MDBCardText>
            {apidata.description}
          </MDBCardText>
          <MDBBtn style={{width:"170px",height:"40px"}}>Buy Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
   )
}
export default Card