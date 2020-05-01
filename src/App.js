import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container className="Nav-Container">
        <Row className="Nav-Row">
          <Col xs={3}>2 of 3 (wider)</Col>
        </Row>
        <Row className="Nav-Row">
          <Col xs={9}>2 of 3 (wider)</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
