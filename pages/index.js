import usePageTitle from "../hooks/usePageTitle";
import List from "../components/List";
import NavBar from "../layout/NavBar";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  usePageTitle("Home Page | TODO");
  return (
    <Container>
      <NavBar />
      <Row className="mt-4">
        <Col>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
