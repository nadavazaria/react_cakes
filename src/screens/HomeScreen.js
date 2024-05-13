import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import {useNavigate, useLocation} from 'react-router-dom'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let keyword = useLocation().search

  const productList = useSelector(state => state.productList)
  const {error , loading, products} = productList

  console.log(keyword)
  useEffect(() => {
    dispatch(listProducts(keyword))
  
  }, [dispatch, keyword]);


  return (
    <div>
      {!keyword && <ProductCarousel/>}
      <h1> latest cakes</h1>
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>
          :
          <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
    }
     
    </div>
  );
};

export default HomeScreen;
