import {combineReducers} from 'redux';
import filterReducer from './ui/filter_reducer';
import selectedParkReducer from './ui/selected_park_reducer';

export default combineReducers({
  filters: filterReducer,
  selectedPark: selectedParkReducer
});
