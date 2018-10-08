import React from 'react';
import ParkIndexItem from './park_index_item';

class ParkIndex extends React.Component {

  componentDidMount() {
    let defaultBounds = {
        northEast: {'lat': '37', 'lng': '-122'},
        southWest: {'lat': '38', 'lng': '-121'}
      };
    this.props.fetchParks(defaultBounds);
  }

  render() {
    return (
      <div>
        <ul className='park-index-list'>
          {this.props.parks.map(park => {
            return <ParkIndexItem key={park.id} park={park} />;
          })}
        </ul>
      </div>
    );
  }

}

export default ParkIndex;
