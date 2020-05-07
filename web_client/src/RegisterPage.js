import React, { useState } from 'react';
import logo from './logo.svg';
import './RegisterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ButtonGroup} from 'react-bootstrap';

function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

function randImg() {
  var nb = getRandomInt(3);
  var img = '';

  if (nb == 1)
    img = require('./antar.jpg');
  if (nb == 2)
    img = require('./earth.jpg');
  if (nb == 3)
    img = require('./NY.webp');
  return img;
}

function RegisterPage() {

  const [test, setTest] = useState(600);
  const [img, setImg] = useState(randImg());

  const style = {
    margin: 15,
  };

  function hello() {
    console.log('hello: ', test)
  }


  return (
    <div className="RegisterPage">
      <header className="RegisterPage-back" style={{backgroundImage: `url(${img})`,}}>
        <header className="RegisterPage-form">
          <Form>
            <Form.Label size='lg' style={{marginBottom: '5vh'}} > Register </Form.Label>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> Email address</Form.Label>
              <Form.Control onChange={node => setTest(node.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
              <Button variant="primary" style={{marginTop: 30}} onClick={hello} active>
                Submit
              </Button>
            <br/>
              <Button variant="outline-primary" style={{marginTop: '5vh'}}>
                Already have an account ?
              </Button>
          </Form>
        </header>
      </header>
    </div>
  );
}

export default RegisterPage;
