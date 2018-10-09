import {connect} from 'react-redux';

import ParkIndex from './park_index';
import {allParks} from '../../reducers/selectors';
import {fetchParks} from '../../actions/park_actions';
import {receiveSelectedPark} from '../../actions/selected_park_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    parks: allParks(state),
    bounds: state.ui.filters
  };
};

const mapDispatchToProps = () => dispatch => ({
  fetchParks: (park) => dispatch(fetchParks(park)),
  receiveSelectedPark: (park) => dispatch(receiveSelectedPark(park))
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkIndex);
