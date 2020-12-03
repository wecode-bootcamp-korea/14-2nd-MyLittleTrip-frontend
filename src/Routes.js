import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main/Main';
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { theme } from './styles/theme';
import GlobalStyle from './styles/Globalstyles';

class Routes extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login} />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}


export default Routes;