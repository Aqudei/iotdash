import React from 'react';
import "react-dom"
import logo from './logo.svg';
import './App.css';
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logs: "" };
  }

  componentDidMount() {
    setInterval(() => {
      fetch("https://w6vx676bg1.execute-api.us-east-2.amazonaws.com/dev", { method: 'GET' }).then((response) => {
        return response.json();
      }).then(data => {
        let responseData = JSON.stringify(data,null, 2);
        console.log(responseData);
        this.setState({ logs: responseData });
      });
    }, 2000);
  }

  render() {
    let logs = this.state.logs;

    return (
      <Container>
        <Row>
          <div>
            <h1>IOT Management and Control</h1>
          </div>
        </Row>
        <Row>
          <Col >
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Choose Command</Form.Label>
                <Form.Control as="select">
                  <option>Turn Off Led</option>
                  <option>Launch Nuclear</option>
                  <option>Assasinate President</option>
                  <option>Destroy World</option>
                  <option>Withdraw Million Dollars</option>
                </Form.Control>
                <br />
                <Button>Send Command</Button>
              </Form.Group>
              {/* <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Custom Command</Form.Label>
                <Form.Control as="textarea" rows="3" />
                <br />
                <Button>Send</Button>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="exampleForm.Lookup">
                <Form.Label>Commands Lookup</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <Form>
              <Form.Group controlId="exampleForm.Logs">
                <Form.Label>Logs</Form.Label>
                <Form.Control readOnly as="textarea" rows="20" value={logs} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container >
    );
  }

}

export default App;
