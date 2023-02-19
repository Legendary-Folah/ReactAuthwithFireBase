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
                </Card.Body>
            </Card>
        </>
    );
};

export default Login;