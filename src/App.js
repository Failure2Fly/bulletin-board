import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container fluid="lg" className="Nav-Container">
        <Row className="Nav-Row">
          <Col md={3}>Navigation</Col>
        </Row>
        <Row className="Nav-Row">
          <Col md={9}>Bulletin-Board</Col>
        </Row>
      </Container>
      <Container>
      <Row className="Nav-Row">
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row className="Nav-Row">
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
      
    </div>
  );
}

export default App;
