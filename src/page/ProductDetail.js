import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
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
