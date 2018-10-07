import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import parksReducer from './parks_reducer';

export default combineReducers({
  users: usersReducer,
  parks: parksReducer
});
