import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormItem from "./components/Form/Form";
import ItemsLIst from "./components/Items/Item/ItemsList";

function App() {
  return (
    <Container className="text-center mt-4">
      <h1 className="display-3">My Shooping List 😊</h1>
      <FormItem />
      <Row>
        <Col sm={6} xs={12}>
          <ItemsLIst done={false} />
        </Col>
        <Col sm={6} xs={12}>
          <ItemsLIst done={true} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
