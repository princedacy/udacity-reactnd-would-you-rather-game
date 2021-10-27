import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAuthedUser } from '../actions/authedUser'
import { Button, Avatar, Image } from "antd";
class Nav extends Component {
    logout = () => {
        localStorage.removeItem('user');
        this.props.dispatch(logoutAuthedUser)
        this.props.history.push('/login')
    }
    login = () => {
        console.log(this.props.history.push('/login'))
    }
    render() {
        const { user, isAuth } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/add'>New Question</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/leaderboard'>Leader Board</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        {isAuth ? (
                            <Fragment>
                                <div className='autheduser-initials mr-5'>
                                    <p className="navbar-text pr-2">
                                        Hello, {user && user.name}
                                    </p>
                                    <Avatar src={<Image src={user && user.avatarURL} style={{ width: 32 }} />} style={{ width: 32, height: 32 }} />
                                </div>
                                <Button type="primary" onClick={this.logout}>Log out</Button>

                            </Fragment>
                        ) : (
                            <Button type="primary" onClick={this.login}>Log in</Button>
                        )}
                    </div>

                </div>
            </nav>
        )
    }
}
function mapStateToProps({ authedUser, users }) {
    return {
        isAuth: authedUser !== null,
        user: users[authedUser]
    }
}
export default withRouter(connect(mapStateToProps)(Nav))