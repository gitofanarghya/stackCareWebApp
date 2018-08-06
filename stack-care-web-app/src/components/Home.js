import React from 'react'
import Map from './Map'
import Notifications from './Notifications'
import CommunitiesStatus from './CommunitiesStatus'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'
import SearchBar from './SearchBar'
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
    state = {
        markersData: [
            { lat: 40.7128, lon: -74.0060 , name: 'New York' },            
            { lat: 34.0194, lon: -118.4108 , name: 'Los Angeles' },
            { lat: 41.8376, lon: -87.6818, name: 'Chicago'},
            { lat: 29.7866, lon: -95.3909, name: 'Houston'},
            { lat: 33.5722, lon: -112.0901, name: 'Phoenix'},
            { lat: 40.0094, lon: -75.1333, name: 'Philadelphia'},
            { lat: 29.4724, lon: -98.5251, name: 'San Antonio'},
            { lat: 32.8153, lon: -117.1350, name: 'San Diego'},
            { lat: 32.7933, lon: -96.7665, name: 'Dallas'},
            { lat: 37.2967, lon: -121.8189, name: 'San Jose'},
            { lat: 30.3039, lon: -97.7544, name: 'Austin'}
          ]
    }
    render () {
        return (/*
            <Grid item sm={2} className={classNames("flex", "refreshContainer")}>
            
            </Grid>
            <Grid item sm={2} className={classNames("flex", "filterContainer")}>
            
            </Grid>*/
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
                            <Grid container className="flex" alignItems="stretch" direction="row" justify="space-around">
                                <Grid item sm={6} className={classNames("flex", "padded")}>
                                    <CommunitiesStatus />
                                </Grid>
                                <Grid item sm={6} className={classNames("flex", "padded")}>
                                    <Grid container className="flex" alignItems="stretch" direction="column" justify="space-around">
                                        <Grid item sm className={classNames("flex", "mapContainer")}>
                                            <Map markersData={this.state.markersData}/>
                                        </Grid>
                                        <Grid item sm className={classNames("flex", "graphDiv")}>
                                            <Grid container className={classNames("flex", "graphContainer")} alignItems="stretch" direction="column" justify="space-around">
                                                <Grid item sm className="title">
                                                    <Typography variant="headline" component="h3">
                                                        Notifications
                                                    </Typography>
                                                </Grid>
                                                <Grid item sm className="flex">
                                                    <Notifications />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

/*<Map markersData={this.state.markersData}/> 
                        <SomeComponent />
                        */