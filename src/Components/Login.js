import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <Card className="card">
                <Card.Body>
                    <h3 className="text-center mb-3">Login</h3>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Login;