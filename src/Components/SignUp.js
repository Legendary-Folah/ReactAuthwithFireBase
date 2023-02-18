import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';

function SignUp() {
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='confirm-password'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' ref={confirmPasswordRef} required />
            </Form.Group>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Login
      </div>
    </>
  )
}

export default SignUp;
