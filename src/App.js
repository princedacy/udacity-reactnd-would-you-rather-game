import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./views/Login";
import Nav from './components/nav'
import Home from './views/Home'
import Question from './components/question'
import NewQuestion from "./views/NewQuestion";
import LeaderBoard from "./views/LeaderBoard";
import { handleInitialData } from './actions/shared';
import { setAuthedUser } from './actions/authedUser'
import ProtectedRoute from './components/protectedRoute';
import Notfound from './components/notFound';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const user = localStorage.getItem('authedUser');
    if (user) {
      this.props.dispatch(setAuthedUser(user))
    }
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <ProtectedRoute path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <ProtectedRoute path='/questions/:question_id' component={Question} />
            <ProtectedRoute path='/leaderboard' component={LeaderBoard} />
            <ProtectedRoute path='/add' component={NewQuestion} />
            <Route component={Notfound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
