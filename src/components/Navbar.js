import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Leader Board</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Hello, Tyler McGinnis
                    </span>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar