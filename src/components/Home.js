import { Container, Col, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Home() {
  const { contacts } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch({
      type: "DELETE",
      payload: id
    });
    toast.success("Contact Deleted successfuly!");
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={12} className=" my-3 text-right">
          <Link to="/add">
            <Button>Add Contact</Button>
          </Link>
        </Col>
        <Col md={6} mx={"auto"}>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link to={`edit/${contact.id}`}>
                      <Button className="btn-sm m-2">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(contact.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
