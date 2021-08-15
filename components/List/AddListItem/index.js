import { React, useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddListItem = ({ onAddItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(item);
    setItem(null);
  };

  // Setting the category data on every change we can do use,
  // debounce here as well to prevent it but as there
  // is no API calls or heavy work so avoiding.

  const handleOnChange = (e) => {
    e.preventDefault();
    setItem({
      id: uuidv4(),
      name: e.target.value,
      createdAt: Date.now(),
      items: [],
    });
  };

  return (
    <Accordion className="my-2" defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" variant="link">
          Add Category
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Row className="align-items-center">
                <Col>
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Add an category for your TODO items
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter a category"
                    onChange={handleOnChange}
                    value={item ? item.name.value : ""}
                    type="text"
                    required
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2" variant="danger">
                    Add
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AddListItem;
