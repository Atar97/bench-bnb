import * as ParkUtil from '../util/park_api_util';

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK_ERRORS = 'RECEIVE_PARK_ERRORS';

export const receiveParks = (parks) => ({
  type: RECEIVE_PARKS,
  parks
});

export const receiveErrors = (errors) => ({
  type: RECEVIE_PARK_ERRORS,
  errors
});

export const fetchBenches = () => dispatch => {
  const success = (parks) => dispatch(receiveParks(parks));
  const failure = (errors) => dispatch(receiveErrors(errors));
  ParkUtil.fetchParks()
    .then(success, failure);
};
