import React from 'react';
import ParkMap from './park_map';
import ParkIndexContainer from '../park/park_index_container';
import {connect} from 'react-redux';

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <ParkMap parks={this.props.parks}/>
        <ParkIndexContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.entities.parks
  };
};

export default connect(mapStateToProps)(SearchContainer);
