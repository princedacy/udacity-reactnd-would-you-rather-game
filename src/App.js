import React, {Component} from 'react'
import Login from "./views/Login";
import Navbar from './components/Navbar'
import Home from './views/Home'
import LeaderBoard from "./views/LeaderBoard";
import NewQuestion from "./views/NewQuestion";
import {handleApiData} from './actions/shared';
import {setAuthedUser} from './actions/authedUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleApiData());
  }
  render() {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('user')
    }
    return(
      <div>
      </div>
    )
  } 
}

export default App;
