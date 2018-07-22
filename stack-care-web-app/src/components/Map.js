import React from "react";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css"

const style = {
  width: "800px",
  height: "800px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
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
    <div id="map" style={style} />
    );
  }
}

export default Map;
