import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import RestaurantList from './containers/restaurant_list';
import RestaurantDetails from './containers/restaurant_details';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <Switch>
        <Route path="/restaurant/details/:id" component = { RestaurantDetails } />
        <Route path="/" component = { RestaurantList } />
      </Switch>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
