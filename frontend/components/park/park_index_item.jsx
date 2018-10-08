import React from 'react';

const ParkIndexItem = ({park}) => (
  <li className='park-index-item'>
    <h3>{park.description}</h3>
    <img src={park.image} />
  </li>
);

export default ParkIndexItem;
