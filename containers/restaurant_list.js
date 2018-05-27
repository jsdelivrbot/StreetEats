import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchRestaurant } from '../actions/index';
import SearchBar from './search_bar';

class RestaurantList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  componentDidMount() {
    if(this.state.city == '')
      this.props.fetchRestaurant();
  }

  renderRestaurantList() {

    if (this.props.restaurants == null || this.props.restaurants.length == 0) {
      return <div> No nearby restaurants </div>
    }

    return this.props.restaurants.map((restaurant) => {

      return (
        <li
          key={restaurant.apiKey}
          className="list-group-item">
          <Link to={`/restaurant/details/${restaurant.apiKey}`} >
            <div className="media">

              <div className="media-left">
                <img className="media-object" height="100" width="100" src={restaurant.logoUrl} />
              </div>

              <div className="media-body">
                {restaurant.name}
                <br />
                {restaurant.streetAddress}, {restaurant.city}, {restaurant.state} - {restaurant.zip}
                <br />
                {restaurant.phone}
              </div>
            </div>
          </Link>
        </li>
      );

    });

  }

  getRestaurantByCity(city) {
    this.setState({ city });
    this.props.fetchRestaurant(city);
  }

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-3">Welcome to Street Eats</h1>
          </div>
        </div>
        <SearchBar getCity={ city =>  this.getRestaurantByCity(city) }/>
        <br/>
        <ul className="col-md-4 list-group">
          {this.renderRestaurantList()}
        </ul>
      </div>
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
