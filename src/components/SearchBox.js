import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
 
    let navigate = useNavigate()
    const { pathname } = useLocation(); 
   
    const submitHandler = (e) => {
      e.preventDefault();
      if(keyword){
        navigate(`/?keyword=${keyword}`)
      } else {
        navigate(navigate(pathname))
      }
    };
   
    return (
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="q"
              onChange={(e) => setKeyword(e.target.value)}
              className="mr-sm-2 ml-sm-5"
            ></Form.Control>
          </Col>
          <Col>
            <Button type="submit" variant="outline-success" className="p-2" >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
   
  export default SearchBox;