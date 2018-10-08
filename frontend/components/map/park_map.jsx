import React from 'react';
import {withRouter} from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class ParkMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(this.map);
    this.map.addListener('idle', this.handleIdleMap.bind(this));
    this.map.addListener('rightclick', this.handleClick.bind(this));
  }

  handleIdleMap() {
    const bounds = this.map.getBounds();
    const northEast = {
      lat: bounds.getNorthEast().lat(),
      lng: bounds.getNorthEast().lng()
    };
    const southWest = {
      lat: bounds.getSouthWest().lat(),
      lng: bounds.getSouthWest().lng()
    };

    const boundsParams = {
      northEast,
      southWest
    };
    this.props.updateFilter(boundsParams);
  }

  handleClick(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.props.history.push({
      pathname: 'parks/new',
      search: `lat=${lat}&lng=${lng}`
    });
  }

  componentDidUpdate() {
    this.markerManager.updateMarkers(this.props.parks);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    );
  }
}

export default withRouter(ParkMap);
