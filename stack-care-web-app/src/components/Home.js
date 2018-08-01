import React from 'react'
import Map from './Map'
import SomeComponent from './SomeComponent'
import CommunitiesStatus from './CommunitiesStatus'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'

export default class Home extends React.Component {
    state = {
        markersData: [
            { latLng: { lat: 40.7128, lng: -74.0060 }, title: 'New York' },
            { latLng: { lat: 34.0194, lng: -118.4108 }, title: 'Los Angeles' },
            { latLng: { lat: 41.8376, lng: -87.6818}, title: 'Chicago'},
            { latLng: { lat: 29.7866, lng: -95.3909}, title: 'Houston'},
            { latLng: { lat: 33.5722, lng: -112.0901}, title: 'Phoenix'},
            { latLng: { lat: 40.0094, lng: -75.1333}, title: 'Philadelphia'},
            { latLng: { lat: 29.4724, lng: -98.5251}, title: 'San Antonio'},
            { latLng: { lat: 32.8153, lng: -117.1350}, title: 'San Diego'},
            { latLng: { lat: 32.7933, lng: -96.7665}, title: 'Dallas'},
            { latLng: { lat: 37.2967, lng: -121.8189}, title: 'San Jose'},
            { latLng: { lat: 30.3039, lng: -97.7544}, title: 'Austin'}
          ]
    }
    render () {
        return (
            <Grid container className={classNames("dash", "flex")} alignItems="stretch" direction="row" justify="space-around">
                <Grid item sm={8} className={classNames("dash-left-div", "flex")}>
                    <Grid container className={classNames("dash-left-grid", "flex")} alignItems="stretch" direction="column" justify="space-around">
                        <Grid item sm={12} className="flex">
                            <Grid container className={classNames("map-grid", "flex")} alignItems="stretch" direction="column" justify="space-around">
                                <Map markersData={this.state.markersData}/>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} className="flex">
                            <Grid container className={classNames("someComponent-grid", "flex")} alignItems="stretch" direction="column" justify="space-around">
                                <SomeComponent />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} className="dash-right-div">
                    <CommunitiesStatus />
                </Grid>
            </Grid>
        )
    }
}

//<Map />