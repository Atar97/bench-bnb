import {
  RECEIVE_SELECTED_PARK
} from '../../actions/selected_park_actions';

export default (state = {id: null}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SELECTED_PARK:
      return {id: action.park.id};
    default:
      return state;
  }
};
