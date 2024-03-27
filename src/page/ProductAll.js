import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
function ProductAll() {
    const [productList,setProductList] = useState([])
    const getProduct = async () =>{
        let url = 'https://my-json-server.typicode.com/mjhn010/react-hnm/products'
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProductList(data)
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <Container>
            <Row>
                {productList.map((list=><Col lg={3}><ProductCard item={list}/></Col>))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
