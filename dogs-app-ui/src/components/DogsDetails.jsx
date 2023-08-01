import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const DogsDetails = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter =()=>{
    setCounter(counter+1);
    props.parentCount(props.info.alias);
}
  return (
    <Card >
      <Card.Body >
        <Card.Title >Id: {props.info.id}</Card.Title>
        <Card.Text >Name: {props.info.name}</Card.Text>
        <Row>
          <Col><Button variant="primary" onClick={incrementCounter}>Like</Button></Col>
          <Col>{counter > 0 && <Card.Text >Likes: {counter}</Card.Text >}</Col>
        </Row>     
         </Card.Body>
    </Card>
  )
}

export default DogsDetails