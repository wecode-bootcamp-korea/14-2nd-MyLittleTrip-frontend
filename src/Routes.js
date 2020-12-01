import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Main from "./pages/Main/Main";
import GlobalStyle from './styles/Globalstyles';


class Routes extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}


export default Routes;