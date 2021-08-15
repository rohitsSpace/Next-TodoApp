import React, { useState } from "react";
import { Accordion, Card, Button, Col, Form } from "react-bootstrap";

const AddCard = ({ onAddItem }) => {
  const [des, setDes] = useState("");
  const [title, setTitle] = useState("");

  return (
    <Accordion className="mb-2" defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Add Todo item
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form
              onSubmit={(e) => {
                onAddItem({ des, title });
              }}>
              <Form.Row className="align-items-center">
                <Col>
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Add title
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter title for your item"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    required
                  />
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Add info
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter optional info about your todo"
                    onChange={(e) => setDes(e.target.value)}
                    value={des}
                    as="textarea"
                    rows={3}
                  />
                </Col>
              </Form.Row>
              <Button type="submit" className="mb-2">
                Add
              </Button>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AddCard;
