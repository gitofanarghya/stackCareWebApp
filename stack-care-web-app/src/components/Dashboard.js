import React, { Component } from 'react';
import Home from './Home'
import { Route } from "react-router-dom";
import CommunityPage from './CommunityPage';
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import NavBar from './NavBar';
import Loading from './Loading'

export default class Dashboard extends Component {

    state = {
        allCommunities: [],
        isLoading: true,
        error: null,
        community: null
    }

    componentDidMount() {
        
        let data = null
        fetch( "https://care-api-staging.appspot.com/communities?get_all=1", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${this.props.accessToken}`
            },
            body: data,
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(response => {
            this.setState({ allCommunities: response, isLoading: false })
        })
        .catch(error => {
            this.setState({ error, isLoading: false })
        })
    }
    
    render() {
        
      /*
      <Grid item sm={2} className={classNames("flex", "refreshContainer")}>
      
      </Grid>
      <Grid item sm={2} className={classNames("flex", "filterContainer")}>
      
      </Grid>*/
      return(
        this.state.isLoading ? <Loading /> :
        <NavBar>
            <Grid container className="flex" justify="center" alignItems="stretch">
                <Grid item xs={10} className="flex">
                    <Grid container className="flex" alignItems="stretch" direction="column" justify="space-around">
                        <Grid item className={classNames("flex", "topGridContainer", "padded2x")}>
                            <Grid container className="flex" alignItems="stretch" direction="row" justify="center">
                                <Grid item sm={6} className={classNames("flex", "searchBarContainer")}>
                                    <SearchBar communities={this.state.allCommunities} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classNames("flex", "bottomGridContainer", "padded")}>
                            <Route exact path="/" render={routeProps => <Home {...routeProps} communities={this.state.allCommunities} />} />
                            <Route exact path="/:communityId/:communityName" render={routeProps => <CommunityPage {...routeProps} accessToken={this.props.accessToken}/>} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </NavBar>
      )}
} 