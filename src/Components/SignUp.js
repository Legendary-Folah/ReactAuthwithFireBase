import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';

function SignUp() {
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an acount? Log In here
      </div>
    </>
  )
}

export default SignUp;
