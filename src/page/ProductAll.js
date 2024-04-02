import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import {productAction} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
function ProductAll() {
    const productList = useSelector(state=>state.product.productList)
    const [query,setQuery] = useSearchParams();
    const dispatch = useDispatch()
    const getProducts =  () =>{
        let searchQuery = query.get("q") || ""
       dispatch(productAction.getProducts(searchQuery))
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
