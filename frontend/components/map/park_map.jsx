import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ParkMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.markerManager.updateMarkers();
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    );
  }
}

export default ParkMap;
