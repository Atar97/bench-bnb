import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';
import Greeting from './greeting';

const mapStP = (state) => {
  debugger;
  const currentUser = state.entities.users[state.session.id];
  return {currentUser};
};

const mapDtP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStP, mapDtP)(Greeting);
