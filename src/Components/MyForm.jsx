import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const MyForm = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleCityClick = (newCity) => {
    onCityChange(newCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onCityChange(city.trim());
    }
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
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
          <Form.Control type="text" placeholder="Inserisci nome città" value={city} onChange={(e) => setCity(e.target.value)} />
        </Col>
        <Col xs={1}>
          <Button variant="primary" type="submit">
            Cerca
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MyForm;
