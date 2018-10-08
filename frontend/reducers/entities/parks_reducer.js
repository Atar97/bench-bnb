import {RECEIVE_PARKS, RECEIVE_PARK} from '../../actions/park_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PARKS:
      return action.parks;
    case RECEIVE_PARK:
    debugger;
      return Object.assign({}, state, action.park);
    default:
      return state;
  }
};
