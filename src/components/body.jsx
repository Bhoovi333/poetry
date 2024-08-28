import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <>
    <Card style={{ width: '16.7rem',alignContent:'center'}} className="d-inline-flex p-2">
      <Card.Img  style={{ height: '14rem',alignContent:'center', justifyContent:'space-evenly'}}src={props.imgsrc} />
      <Card.Body>
        <Card.Title style={{ color:"brown"}}><i>{props.title}</i><br></br><h6>{props.author}</h6></Card.Title>
        <Button style={{ backgroundColor:"maroon"}} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicExample;