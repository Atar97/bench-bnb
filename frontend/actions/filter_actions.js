export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
import {fetchParks} from './park_actions';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

// export const updateFilter = 
