import { TShoppingItem } from "../../types/TShoppingItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormEventHandler, useState } from "react";

function FormItem() {
  const [data, setData] = useState<TShoppingItem>({
    date: new Date(),
    info: "",
    isDone: false,
  });

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log("work", data);
    setData((prev) => ({ ...prev, info: "" }));
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="הכניסי פריט חדש"
              onChange={(e) =>
                setData((prev) => ({ ...prev, ["info"]: e.target.value }))
              }
              value={data.info}
            />
          </Col>

          <Col sm={4}>
            <Button variant="primary" type="submit">
              אישור
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default FormItem;
