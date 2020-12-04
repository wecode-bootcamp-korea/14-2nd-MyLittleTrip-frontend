import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main/Main';
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { theme, flexSet } from './styles/theme';
import GlobalStyle from './styles/Globalstyles';

class Routes extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme} flexSet={flexSet}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/loading" component={LoadingScreen} />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}


export default Routes;