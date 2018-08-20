import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import LoginComponent from './components/LoginComponent';
import NavBar from './components/NavBar';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    auth: false,
    accessToken: "",
  }

  login = (accessToken) => {
    this.setState({
      auth: true,
      accessToken: accessToken
    })
  }

  logout = () => {
    this.setState({
      auth: false
    })
  }
  

  render() {
    return (
      this.state.auth ?  
        <Dashboard accessToken={this.state.accessToken} />
      :
        <NavBar>
            <Grid container className={classNames("App", "flex")} alignItems="center" direction="row" justify="center">
              <Grid sm={6} item className={classNames("flex", "loginpiccontainer")}>
                <div className="loginpic">
                </div>
              </Grid>
              <Grid sm={3} item className="flex">
                <LoginComponent login={this.login} logout={this.logout} />
              </Grid>
            </Grid>
        </NavBar>
    );
  }
}

export default App;
