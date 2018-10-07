import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStP = ({entities, session}) => {
  const currentUser = entities.users[session.id];
  return {currentUser};
};

const mapDtP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStP, mapDtP)(Greeting);
