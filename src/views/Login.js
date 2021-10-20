import React, { Component } from "react";
import logo from "../logo512.png";

class Login extends Component {
  state = {
    user: "",
  };
  render() {
    return (
      <div class="card">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 class="card-title">Welcome to the Would You Rather App!</h5>
          <p class="card-text">Please sign in to continue</p>
          <img src={logo} alt="Logo" width="100px" />
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button type="button" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
