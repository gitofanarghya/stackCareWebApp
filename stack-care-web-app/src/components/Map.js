import React from "react";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css"
import Grid from '@material-ui/core/Grid'

const style = {
  height: "100%"
};

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [35.1439, -97.0315],
      zoom: 4,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")
      ]
    });

    // fix for library issue not rendering marker.
    this.customDefault = L.icon({
        iconUrl: 'img/marker-icon.png',
        shadowUrl: 'img/marker-shadow.png',
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);
  }
  updateMarkers(markersData) {
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title, icon: this.customDefault }).addTo(this.layer);
    });
  }
  render() {
  return (
    <Grid item sm={12} id="map" style={style} />
    );
  }
}

export default Map;
