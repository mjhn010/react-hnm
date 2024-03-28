import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
function ProductAll() {
    const [productList,setProductList] = useState([])
    const [query,setQuery] = useSearchParams();
    const getProduct = async () =>{
        let searchQuery = query.get("q") || ""
        let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProductList(data)
    }
    useEffect(()=>{
        getProduct()
    },[query])
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
