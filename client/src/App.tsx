import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormItem from "./components/Form/Form";

function App() {
  return (
    <Container className="text-center mt-4">
      <h1 className="display-3">My Shooping List 😊</h1>
      <FormItem />
    </Container>
  );
}

export default App;
