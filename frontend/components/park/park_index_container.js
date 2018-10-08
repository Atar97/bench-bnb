import {connect} from 'react-redux';
import ParkIndex from './park_index';
import {allParks} from '../../reducers/selectors';
import {fetchParks} from '../../actions/park_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    parks: allParks(state)
  };
};

const mapDispatchToProps = () => dispatch => ({
  fetchParks: () => dispatch(fetchParks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkIndex);
