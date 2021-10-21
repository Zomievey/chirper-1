import { ListGroup } from "react-bootstrap";

export default function Chirp() {
  return (
    <ListGroup.Item>
      <h3>@Username</h3>
      <br />
      message
      <br />
      timestamp
    </ListGroup.Item>
  );
}
