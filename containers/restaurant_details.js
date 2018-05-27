import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../component/google_map';

class RestaurantDetails extends Component {

  componentDidMount() {
    console.log('restaurant api key ' + this.props.match.params.id);
  }

  render() {
    return(
      <div className="container-fluid">
        <br/>
        <h5><b>Restaurant Details:</b></h5>
        <h6><b>Location:</b></h6>
        <GoogleMap google={this.props.google} />
        <br/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgXYlIiVuM8rn_9obcZCwWRtemwSnLQzo',
})(RestaurantDetails);
