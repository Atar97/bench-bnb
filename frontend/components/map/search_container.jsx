import React from 'react';
import ParkMap from './park_map';
import ParkIndexContainer from '../park/park_index_container';

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <ParkMap />
        <ParkIndexContainer />
      </div>
    );
  }
}

export default SearchContainer;
