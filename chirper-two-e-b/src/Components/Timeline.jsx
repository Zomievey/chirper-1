import React from "react";
import { ListGroup } from "react-bootstrap";
import Chirp from "./Chirp";

export default function Timeline() {
  return (
      <ListGroup variant="flush">
          <Chirp />
          <Chirp />
          <Chirp />
    
    </ListGroup>
  );
}
