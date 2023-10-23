import React, { Component, Fragment } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      message: "",
      agree: false,
    };
  }
  handleInputChnage = (event) => {
   const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
   const name = event.target.name
   this.setState({
    [name]: value
   })
  };
  handleSubmit = (event) => {
    console.log(this.state.agree)
    // event.preventDeafult();

  };
  render() {
    document.title = "Contact Page";
    return (
      <div>
        <Fragment>
          <Container>
            <h1>Send us your feebback</h1>
            <Form onSubmit={this.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleInputChnage}
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    value={this.state.lastname}
                    onChange={this.handleInputChnage}
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    value={this.state.mobile}
                    onChange={this.handleInputChnage}
                    name="mobile"
                    type="number"
                    placeholder="Mobile Number"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={this.state.email}
                    onChange={this.handleInputChnage}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="validationCustom04">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    value={this.state.message}
                    onChange={this.handleInputChnage}
                    name="message"
                    type="text"
                    placeholder="Message"
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  checked={this.state.agree}
                  onChange={this.handleInputChnage}
                  name="agree"
                  label="May we contact you?"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Container>
        </Fragment>
      </div>
    );
  }
}
