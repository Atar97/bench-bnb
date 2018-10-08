import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signUp} from '../../actions/session_actions';

const mapLoginState = ({errors: {sessionErrors}}) => ({
  errors: Object.values(sessionErrors),
  formType: 'Login'
});

const mapLoginDispatch = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

const mapSignupState = ({errors: {sessionErrors}}) => ({
  errors: Object.values(sessionErrors),
  formType: 'Sign Up'
});

const mapSignupDispatch = dispatch => ({
  processForm: (user) => dispatch(signUp(user))
});

export const SignupForm = connect(
  mapSignupState,
  mapSignupDispatch)(SessionForm);

export const LoginForm = connect(
  mapLoginState,
  mapLoginDispatch)(SessionForm);
