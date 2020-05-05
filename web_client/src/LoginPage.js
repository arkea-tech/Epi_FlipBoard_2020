import React, { useState } from 'react';
import logo from './logo.svg';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ButtonGroup} from 'react-bootstrap';


function LoginPage() {

  const [test, setTest] = useState(600);
  const style = {
    margin: 15,
  };

  function hello() {
    console.log('hello: ', test)
  }

  return (
    <div className="LoginPage">
      <header className="LoginPage-back">
        <header className="LoginPage-form">
          <Form>
            <Form.Label size='lg' style={{marginBottom: '5vh'}} > Login </Form.Label>
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
                Don't have an account ?
              </Button>
          </Form>
        </header>
      </header>
    </div>
  );
}

export default LoginPage;
