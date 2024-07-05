import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyNav() {
  return (
    <Navbar className=" navBar bg-body-primary border border-1px solid black rounded">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          MyMeteo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            Signed in as:{" "}
            <a href="#login" className="text-white">
              Yuri Impellizzeri
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
