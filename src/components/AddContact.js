import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <Container>
      <h1 className="display-3 text-center my-2">Add Contact</h1>
      <Row className="d-flex justify-content-center">
        <Col md={6} mx="auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control type="number" placeholder="Number" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
