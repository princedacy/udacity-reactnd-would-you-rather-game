import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./views/Login";
import Nav from './components/Nav'
import Home from './views/Home'
import Question from './views/Question'
import NewQuestion from "./views/NewQuestion";
import LeaderBoard from "./views/LeaderBoard";
import {handleInitialData} from './actions/shared';
import {setAuthedUser} from './actions/authedUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('user', this.props.dispatch(setAuthedUser(user)))
    }
    return(
      <Router>
        <Fragment>
          <Nav/>
          <Switch>
            <ProtectedRoute path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <ProtectedRoute path='/questions/:question_id' component={Question} />
            <ProtectedRoute path='/leaderboard' component={LeaderBoard} />
            <ProtectedRoute path='/add' component={NewQuestion}/>
          </Switch>
        </Fragment>
      </Router>
    )
  } 
}

export default connect()(App);
