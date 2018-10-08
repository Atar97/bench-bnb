import React from 'react';
import ParkIndexItem from './park_index_item';

class ParkIndex extends React.Component {

  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.parks.map(park => {
            return <ParkIndexItem key={park.id} park={park} />;
          })}
        </ul>
      </div>
    );
  }

}

export default ParkIndex;
