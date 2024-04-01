import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Add() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { firstName, lastName, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify(formData);

      const res = await axios.post('http://localhost:8088/addEmployeer', body, config);
      console.log(res.data); // You can handle the response as needed
    } catch (err) {
      console.error(err.response.data);
    }
    setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
  };

  return (
    <div className='container'>
      <center><h1>Add New Employeer</h1></center>
      <Form
        className='border'
        onSubmit={onSubmit}
        style={{ padding: '100px', borderRadius: '15px', boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}
      >
        <Form.Group as={Row} className="mb-3" controlId="formFirstName">
          <Form.Label column sm="2">
            <h4>First Name</h4>
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="firstName" value={firstName} onChange={onChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formLastName">
          <Form.Label column sm="2">
            <h4>Last Name</h4>
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="lastName" value={lastName} onChange={onChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2">
            <h4>Email</h4>
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" name="email" value={email} onChange={onChange} />
          </Col>
        </Form.Group>
        <center>
          <Button variant="primary" type="submit">ADD NEW EMPLOYEE</Button>
        </center>
      </Form>
    </div>
  );
}

export default Add;
