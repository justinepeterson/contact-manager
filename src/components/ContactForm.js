import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addAction } from './../actions/contactActions';
import { v4 as uuidv4 } from "uuid"
const ContactForm = (props) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phone: ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setContact((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, phone } = contact;
        if (firstName !== '' && lastName !== '' && phone !== '') {
            props.dispatch(addAction({
                id: uuidv4(),
                firstName,
                lastName,
                phone
            }))
            console.log(firstName)
            setContact((prevState) => {
                return {
                    ...prevState,
                    firstName: "",
                    lastName: "",
                    phone: ""
                }
            })
            props.history.push("/list")
            setErrorMsg('');
        } else {
            setErrorMsg('All the fields are required.');
        }
    };

    return (
        <Form onSubmit={handleOnSubmit} className="contact-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    className="firstName"
                    name="firstName"
                    value={contact.firstName || ''}
                    type="text"
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    className="lastName"
                    name="lastName"
                    value={contact.lastName || ''}
                    type="text"
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    className="phone"
                    name="phone"
                    value={contact.phone || ''}
                    type="number"
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group controlId="submit">
                <Button variant="primary" type="submit" className="submit-btn">
                    Add Contact
                </Button>
            </Form.Group>
        </Form>
    );
};

export default connect()(ContactForm);
