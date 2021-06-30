import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
import { login } from "../Auth";
const logo = "/e-souk-logo.png";

class Login_form extends Component {
  constructor() {
    super();
    this.state = {
      num_telephone: "",
      motDePasse: "",
      errors: {},
      loggedin: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.num_telephone.length > 0 && this.state.motDePasse.length > 0
    );
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    var token = localStorage.getItem("usertoken");
    if (token) {
      console.log(token);
      this.props.history.push(`/home`);
    } else {
      this.props.history.push(`/login`);
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      num_telephone: this.state.num_telephone,
      motDePasse: this.state.motDePasse,
    };
    console.log(user);

    login(user).then((res) => {
      if (res) {
        this.setState({
          loggedin: true,
        });
        this.props.history.push(`/home`);
      } else {
        alert("PLEASEENTER YOUR EMAIL/PASSWORD CORRECTLY ");
      }
    });
  }

  render() {
    return (
      <div className="login-container">
        <img className="logo" src={logo} />
        <div className="Login">
          <Form noValidate onSubmit={this.onSubmit}>
            <Form.Group size="lg" controlId="num_telephone">
              <Form.Label style={{ float: "left" }}>Email</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="num_telephone"
                value={this.state.num_telephone}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="motDePasse">
              <Form.Label style={{ float: "left" }}>Password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.motDePasse}
                name="motDePasse"
                onChange={this.onChange}
              />
            </Form.Group>
            <Button
              variant="warning"
              block
              size="lg"
              type="submit"
              disabled={!this.validateForm()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login_form;
