import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import LoginComponent from './components/LoginComponent';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { Route } from "react-router-dom";
import CommunityPage from './components/CommunityPage';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    auth: true,
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
      /*
      <Grid item sm={2} className={classNames("flex", "refreshContainer")}>
      
      </Grid>
      <Grid item sm={2} className={classNames("flex", "filterContainer")}>
      
      </Grid>*/
      this.state.auth ? 
        <NavBar>
            <Grid container className="flex" justify="center" alignItems="stretch">
                <Grid item xs={10} className="flex">
                    <Grid container className="flex" alignItems="stretch" direction="column" justify="space-around">
                        <Grid item className={classNames("flex", "topGridContainer", "padded2x")}>
                            <Grid container className="flex" alignItems="stretch" direction="row" justify="center">
                                <Grid item sm={6} className={classNames("flex", "searchBarContainer")} alignItems="center">
                                    <SearchBar />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classNames("flex", "bottomGridContainer", "padded")}>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/:communityID" component={CommunityPage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </NavBar>
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
