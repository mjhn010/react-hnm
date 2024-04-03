import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/reducers/productSlice";

function ProductDetail() {
  const product = useSelector(state=>state.product.ProductDetail)
  const dispatch = useDispatch();
  let { id } = useParams();
  const getProductDetail = () => {
    dispatch(fetchProductDetail(id))
    console.log("data", product);
  };
  useEffect(() => {
    getProductDetail();
    console.log(product?.title)
  }, []);
  return (
    <Container>
      <Row className="mobile-flex">
        <Col className="product-img">
          
          <img className="detail-img" src={product?.img} />
          
        </Col>
        <Col className="sub-box">
          <div className="detail-font">{product?.title}</div>
          <div className="detail-font">{product?.price}</div>
          <select className="select-box">
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <button className="buy-btn">구매하기</button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
