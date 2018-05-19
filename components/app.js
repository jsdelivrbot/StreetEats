import React, { Component } from 'react';
import RestaurantList from '../containers/restaurant_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <RestaurantList />
      </div>
    );
  }
}
