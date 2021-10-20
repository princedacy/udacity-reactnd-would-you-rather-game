import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">New Question</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Leader Board</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Hello, Tyler McGinnis
                    </span>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar