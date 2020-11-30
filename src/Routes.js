import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact to="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;