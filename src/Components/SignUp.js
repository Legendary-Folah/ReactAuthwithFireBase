import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';

function SignUp() {

const emailRef = useRef();
const passwordRef = useRef();
const confirmPasswordRef = useRef();
const signup = useAuth();

  return (
    <>
      <Card className='card'>
        <Card.Body>
            <h3 className='text-center mb-3'>Sign Up</h3>
            <Form>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' ref={confirmPasswordRef} required />
                </Form.Group>
                <Button className='w-100 mt-4 center' type='submit'>Sign Up</Button>
            </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Login
      </div>
    </>
  );
};

export default SignUp;
