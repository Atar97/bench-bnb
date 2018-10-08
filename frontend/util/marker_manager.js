export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(parks) {
    const parkArray = Object.values(parks);
    const markers = this.markers;
    const map = this.map;
    parkArray.forEach(park => {
      markers[park.id] = new google.maps.Marker({
        position: {lat: park.lat, lng: park.lng},
        map,
        title: toString(park.id)
      });
    });
  }

  createMarkerfromPark(park) {
    this.markers[park.id] = new google.maps.Marker({
      position: {lat: park.lat, lng: park.lng},
      map: this.map,
      title: park.id
    });
  }

}
