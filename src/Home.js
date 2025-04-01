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
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Home()
{
    const [apidata,setapidata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products").then((result)=>{
            console.log(result)
            result.json().then((data)=>{
                console.log(data)
                setapidata(data)
            })
          })
    },[])
    function singleCard(pid)
    {
        console.log(pid)
         navigate("/item",{state:pid})
    }
   return(
    <div>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
         {
            apidata.map((item)=>
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
  <MDBBtn style={{width:"170px",height:"40px"}} onClick={()=>singleCard(item.id)}>View Data</MDBBtn>&nbsp;&nbsp;&nbsp;
                <MDBBtn style={{width:"170px",height:"40px"}}>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            )
         }
    </MDBRow>
    <Footer></Footer>
    </div>
   )
}
export default Home