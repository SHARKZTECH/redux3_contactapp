import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EditContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contacts } = useSelector((state) => state.contact);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number
    );
    if (checkEmail) {
      return toast.error("This Email already exists");
    }
    if (checkNumber) {
      return toast.error("This Number already exists");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number
    };
    dispatch({
      type: "EDIT",
      payload: data
    });
    toast.success("Contact Updated Successfuly!");
    navigate("/");
  };
  return (
    <Container>
      <h1 className="display-3 text-center my-2">Edit Contact {id}</h1>
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
              save changes
            </Button>
            <Link to="/">
              <Button variant="danger" className="mx-3">
                {" "}
                Cancel
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
