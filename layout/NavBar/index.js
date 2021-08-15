import { Container, Nav, Navbar } from "react-bootstrap";
import Icon from "../../components/Icon";
import { gitHubIcon } from "../../constants/icon";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TODO APP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/Rohitturbot/Next-TodoApp">
            <Icon icon={gitHubIcon} /> Github
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
