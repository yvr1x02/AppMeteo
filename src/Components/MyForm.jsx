import { Form, Button, Row, Col } from "react-bootstrap";

const MyForm = ({ onCityChange }) => {
  const handleCityClick = (newCity) => {
    onCityChange(newCity);
  };

  return (
    <Form className="container">
      <div className="text-center d-flex justify-content-around m-4">
        <Button variant="outline-primary text-white" onClick={() => handleCityClick("Milano")}>
          Milano
        </Button>
        <Button variant="outline-primary text-white" onClick={() => handleCityClick("Catania")}>
          Catania
        </Button>
        <Button variant="outline-primary text-white" onClick={() => handleCityClick("Dublino")}>
          Dublino
        </Button>
        <Button variant="outline-primary text-white" onClick={() => handleCityClick("Londra")}>
          Londra
        </Button>
      </div>
      <Row className="m-3 align-items-center">
        <Col xs={11}>
          <Form.Control type="text" placeholder="Enter city name" />
        </Col>
        <Col xs={1}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MyForm;
