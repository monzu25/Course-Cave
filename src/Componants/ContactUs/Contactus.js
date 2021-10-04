import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contactus = () => {
    return (
        <div className="container d-flex justify-content-center my-5">

            <Form className="w-50 ">
                <h1 className="text-center"> Contact us</h1>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput1">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">

                    <Button className="btn-primary rounded px-2 py-1 text-white" style={{ backgroundColor: "#07294D" }} >Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Contactus;