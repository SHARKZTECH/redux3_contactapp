import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={12} className=" my-3 text-right">
          <Link to="/add">
            <Button>Add Contact</Button>
          </Link>
        </Col>
        <Col md={6} mx={"auto"}></Col>
      </Row>
    </Container>
  );
}
