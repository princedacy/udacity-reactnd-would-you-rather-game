import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import logo from "../logo512.png";
import { setAuthedUser } from '../actions/authedUser'
class Login extends Component {
  state = {
    user: "",
  };
  handleChange = (e) => {
    if (e.target.value !== 'Select user to login') {
      return this.setState({ user: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.dispatch(setAuthedUser(user));
    localStorage.setItem('authedUser', user);
    return this.props.history.push(this.props.link || '/');
  };
  render() {
    const { usersList, isAuth } = this.props
    const { user } = this.state

    if (isAuth) {
      return <Redirect to='/' />;
    }
    return (
      <div className="card col-md-4 mx-auto mt-5">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">Welcome to the Would You Rather App!</h5>
          <p className="card-text">Please sign in to continue</p>
          <img src={logo} alt="Logo" width="100px" />
          <select className="form-select" aria-label="Default select example" onChange={this.handleChange}>
            <option defaultValue='Select user to login'>Select user to login</option>
            {usersList.map((user) => (
              <option value={user} key={user}>{user}</option>
            ))}
          </select>
          <button type="button" className="btn btn-primary" disabled={user === ''} onClick={this.handleSubmit}>
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser, link }) => {
  return {
    usersList: Object.keys(users).map((user) => {
      return user;
    }),
    isAuth: authedUser !== null,
    link
  }
}
export default withRouter(connect(mapStateToProps)(Login));
