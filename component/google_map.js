import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GoogleMap extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {

      const {google} = this.props; // sets props equal to google

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633},
        zoom: 12
      })

      this.map = new google.maps.Map(this.refs.map, mapConfig);
    }

  }

  render() {

    // Should be specified for google maps to work
    const style = {
      width: '800px',
      height: '400px'
    }

    return (
      <div ref="map" style = {style}>
        loading map...
      </div>
    )
  }
}
