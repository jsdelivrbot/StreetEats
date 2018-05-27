import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../component/google_map';
import { fetchRestaurantDetailsByName } from '../actions/index';
import { connect } from 'react-redux';

class RestaurantDetails extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRestaurantDetailsByName(id);
  }

  render() {

    if(this.props.restaurants == null) {
      return <div>Loading...</div>;
    }
    return(
      <div className="container-fluid">
        <br/>
        <h5><b>Restaurant Details:</b></h5>
        <h6><b>Location:</b></h6>

        <GoogleMap
            google={this.props.google}
            lat={this.props.restaurants.latitude}
            lng={this.props.restaurants.longitude}
            name={this.props.restaurants.name} />

        <br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants[0]
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgXYlIiVuM8rn_9obcZCwWRtemwSnLQzo',
})(
  connect(mapStateToProps, { fetchRestaurantDetailsByName })(RestaurantDetails)
);
