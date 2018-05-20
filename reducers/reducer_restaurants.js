import { FETCH_RESTAURANT } from '../actions/index';
import { FETCH_LOCATION } from '../actions/index';

export default function (state = [], action) {

  switch (action.type) {
    case FETCH_RESTAURANT:
      state = [];
      return [ ...action.payload.data.restaurants, ...state ];
  }

  return state;
}
