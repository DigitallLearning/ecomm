import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
function Woman()
{
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products").then((result)=>{
            console.log(result)
            result.json().then((data)=>{
                console.log(data)
                setapidata(data)
            })
          })
    },[])
   return(
    <div>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
         {
            apidata.map((item)=>
                item.category=="women's clothing"?
                <MDBCol>
            <MDBCard>
             <center>
             <MDBCardImage
                src={item.image}
                alt='...'
                position='top'
                style={{width:"200px", height:"200px"}}
              />
             </center>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
                <MDBCardTitle style={{color:"green"}}>{item.category} </MDBCardTitle>
                <MDBCardText>
                 {item.description}
                </MDBCardText>
                <MDBBtn>View Data</MDBBtn>&nbsp;&nbsp;&nbsp;
                <MDBBtn>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>:null
            )
         }
    </MDBRow>
    </div>
   )
}
export default Woman