import React from 'react';

const ParkIndexItem = ({park}) => (
  <li>
    <h3>{park.description}</h3>
    <p>{park.lat} N {park.lng} W</p>
  </li>
);

export default ParkIndexItem;
