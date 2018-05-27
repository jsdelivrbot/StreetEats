import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GoogleMap extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {

      const {google} = this.props; // sets props equal to google
      const lat = this.props.lat;
      const lng = this.props.lng;
      const name = this.props.name;

      const mapConfig = Object.assign({}, {
        center: {
          lat: lat,
          lng: lng
        },
        zoom: 12
      })

      this.map = new google.maps.Map(this.refs.map, mapConfig);

      const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
         position: {lat: lat, lng: lng},
         map: this.map,
         title: name
       });

    }
  }

  render() {

    // Should be specified for google maps to work
    const style = {
      width: '800px',
      height: '400px'
    }

    return ( // in our return function you must return a div with ref='map' and style
      <div ref="map" style = {style}>
        loading map...
      </div>
    )
  }
}
