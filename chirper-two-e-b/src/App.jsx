import React from "react";
import "./App.css";
import { Col, Form, Row } from "react-bootstrap";
import Timeline from "./Components/Timeline";

const App = () => {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="email" placeholder="@Username" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>What's Happening?</Form.Label>
              <Form.Control
                as="textarea"
                maxLength={500}
                placeholder={"500 character max"}
                rows={5}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={8}>
          <Timeline/>
        </Col>
      </Row>
    </div>
  );
};

export default App;
