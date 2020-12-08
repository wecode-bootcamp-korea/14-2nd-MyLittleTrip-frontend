import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import List from "./pages/List/List";
import GlobalStyle from "./styles/Globalstyles";
import DestinationDesk from "./Components/TicketSelector/DestinationDesk";
import TicketSelector from "./Components/TicketSelector/TicketSelector";
import Booking from './pages/Booking/Booking';


class Routes extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/loading" component={LoadingScreen} />
            <Route exact path="/list" component={List} />
            <Route exact path="/ticketselector" component={TicketSelector} />
            <Route exact path="/" component={Main}/>
            <Route exact path='/Booking' component={Booking} />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}


export default Routes;
