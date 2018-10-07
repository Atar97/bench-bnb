import {RECEIVE_PARKS} from '../../actions/park_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PARKS:
      return action.parks;
    default:
      return state;
  }
};
