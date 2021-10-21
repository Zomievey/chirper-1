import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { useState } from "react";
import Films from "./components/Films";
import People from "./components/People";
import { Image } from "react-bootstrap";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showFilms, setShowFilms] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  function handleFilmsClicked() {
    setShowIntro(false);
    setShowFilms(true);
    setShowPeople(false);
  }
  function handlePeopleClicked() {
    setShowIntro(false);
    setShowFilms(false);
    setShowPeople(true);
  }
  return (
    <Container>
     <div className="image"> 
      <Image
        src="https://p.kindpng.com/picc/s/83-834491_official-studio-ghibli-logo-hd-png-download.png"
        rounded
        
      />
      </div>
      <Row className={"mt-3"}>
        <Col xs={{ span: 6, offset: 3 }}>
          <Row>
            <Col className={"text-center"}>
              <Button variant="info" onClick={handleFilmsClicked}>
                Films
              </Button>
            </Col>
            <Col className={"text-center"}>
              <Button variant="info" onClick={handlePeopleClicked}>
                People
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={"mt-5"}>
        {showIntro && (
          <Col xs={{ span: 6, offset: 3 }}>
            <Card className={"text-center"}>
              <Card.Body>
                Studio Ghibli API Lab:
                <br />
                This is a lab to demonstrate my React capabilities. It utilizes
                conditional rendering, fetching data from REST API using a
                useEffect hook, managing multiple array maps utilizing a
                useState hook, and Bootstrap for styling.
                <br />
                Click either button to view the resources for Studio Ghibli and
                ENJOY!
                <br />
                EMAIL @ Haylee_Hunter@aol.com
              </Card.Body>
            </Card>
          </Col>
        )}
        {showFilms && <Films />}

        {showPeople && <People />}
      </Row>
    </Container>
  );
}

export default App;
