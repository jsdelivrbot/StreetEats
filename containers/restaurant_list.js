import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../actions/index';

class RestaurantList extends Component {

  componentDidMount() {
    this.props.fetchRestaurant();
  }

  renderRestaurantList() {
    return this.props.restaurants.map((restaurant) => {
      return (
        <li
          key={restaurant.apiKey}
          className="list-group-item">
            <div className="media">

              <div className="media-left">
                <img className="media-object" height="80" width="80" src={restaurant.logoUrl} />
              </div>

              <div className="media-body">
                {restaurant.name}
                <br />
                {restaurant.streetAddress} {restaurant.state} - {restaurant.zip}
                <br />
                {restaurant.phone}
              </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderRestaurantList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {

  return {
    restaurants: state.restaurants
  };
}

// function mapDispatchToProps(dispatch) {
//
//   return bindActionCreators({ fetchRestaurant : fetchRestaurant }, dispatch);
// }

export default connect(mapStateToProps, { fetchRestaurant })(RestaurantList);
