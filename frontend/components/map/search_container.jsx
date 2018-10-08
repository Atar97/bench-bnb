import React from 'react';
import {connect} from 'react-redux';

import ParkMap from './park_map';
import ParkIndexContainer from '../park/park_index_container';
import {updateBounds} from '../../actions/filter_actions';

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <ParkMap parks={this.props.parks}
           updateBounds={this.props.updateBounds}/>
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

const mapDispatchToProps = dispatch => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
