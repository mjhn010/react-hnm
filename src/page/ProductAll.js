import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/reducers/productSlice'
function ProductAll() {
    const productList = useSelector(state=>state.product.productList)
    const [query,setQuery] = useSearchParams();
    const dispatch = useDispatch()
    const getProducts =  () =>{
        let searchQuery = query.get("q") || ""
       dispatch(fetchProducts(searchQuery))
    }
    useEffect(()=>{
        getProducts()
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
