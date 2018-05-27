import { FETCH_RESTAURANT } from '../actions/index';
import { FETCH_RESTAURANT_DETAILS } from '../actions/index';


export default function (state = [], action) {

  switch (action.type) {
    case FETCH_RESTAURANT:
      state = [];
      return [ ...action.payload.data.restaurants, ...state ];

    case FETCH_RESTAURANT_DETAILS:
      const newState = [ ...state ];
      newState[0] = action.payload.data.restaurant;
      return newState;
  }

  return state;
}
