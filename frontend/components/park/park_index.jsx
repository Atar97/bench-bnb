import React from 'react';
import ParkIndexItem from './park_index_item';

class ParkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className='park-index-list'>
          {this.props.parks.map(park => {
            return <ParkIndexItem key={park.id} park={park}
              receiveSelectedPark={this.props.receiveSelectedPark}/>;
          })}
        </ul>
      </div>
    );
  }

}

export default ParkIndex;
