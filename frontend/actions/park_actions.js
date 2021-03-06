import * as ParkUtil from '../util/park_api_util';

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';
export const RECEIVE_PARK_ERRORS = 'RECEIVE_PARK_ERRORS';

export const receiveParks = (parks) => ({
  type: RECEIVE_PARKS,
  parks
});

export const receivePark = park => ({
  type: RECEIVE_PARK,
  park
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_PARK_ERRORS,
  errors
});

const success = (parks) => dispatch(receiveParks(parks));
const failure = (errors) => dispatch(receiveErrors(errors));

export const createPark = (park) => dispatch => {
  return ParkUtil.createPark(park)
    .then(res => dispatch(receivePark(res)), failure);
};

export const fetchParks = (bounds) => dispatch => {
  return ParkUtil.fetchParks(bounds)
    .then(success, failure);
};
