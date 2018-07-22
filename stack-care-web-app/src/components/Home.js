import React from 'react'
import Map from './Map'

export default class Home extends React.Component {
    state = {
        markersData: [
            { latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 },
            { latLng: { lat: 42.8419, lng: 27.0315 }, title: 2 }
          ]
    }
    render () {
        return (
            <div>
                Home
                <Map markersData={this.state.markersData}/>
            </div>
        )
    }
}