import React, { Component } from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import NavBar from './components/NavBar';
import NavBarDrawer from './components/NavBarDrawer';
import Home from './components/Home';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

class App extends Component {
  state = {
    auth: false,
    accessToken: ""
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
        <NavBarDrawer>
          <div className={classNames("flex", "flex-row")}>
            <Home />
          </div>
        </NavBarDrawer>
      :
        <NavBar>
            <Grid container className={classNames("App", "flex-item", "loginGrid")} justify="center" alignItems="center">
              <Grid item>
                <LoginComponent login={this.login} logout={this.logout} />
              </Grid>
            </Grid>
        </NavBar>
    );
  }
}

export default App;
