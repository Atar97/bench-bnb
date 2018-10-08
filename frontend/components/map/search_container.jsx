import React from 'react';
import {connect} from 'react-redux';

import ParkMap from './park_map';
import ParkIndexContainer from '../park/park_index_container';
import {updateBounds, updateFilter} from '../../actions/filter_actions';

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <ParkMap parks={this.props.parks}
           updateBounds={this.props.updateBounds}
           updateFilter={this.props.updateFilter}/>
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
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updateFilter: (bounds) => dispatch(updateFilter(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
