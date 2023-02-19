import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    const emailRef = useRef();

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
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Login;