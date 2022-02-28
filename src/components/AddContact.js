import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contacts } = useSelector((state) => state.contact);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => parseInt(contact.number) === parseInt(number) && number
    );

    if (!name || !email || !number) {
      return toast.warning("Pliz fill in all fields");
    }
    if (checkEmail) {
      return toast.error("This Email already exists");
    }
    if (checkNumber) {
      return toast.error("This Number already exists");
    }
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    };
    dispatch({
      type: "ADD",
      payload: data
    });
    toast.success("Contact Added Successfuly!");
    navigate("/");
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-2">Add Contact</h1>
      <Link to="/">
        <h6 className="display-3 text-right my-2">Go back</h6>
      </Link>
      <Row className="d-flex justify-content-center">
        <Col md={6} mx="auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
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
