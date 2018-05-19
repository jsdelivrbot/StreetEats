import { combineReducers } from 'redux';
import RestaurantsReducer from './reducer_restaurants';

const rootReducer = combineReducers({
  restaurants: RestaurantsReducer
});

export default rootReducer;
