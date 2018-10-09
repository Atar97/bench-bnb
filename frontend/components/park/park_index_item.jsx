import React from 'react';

class ParkIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.currentTarget);
  }

  render() {
    return (
    <li onClick={this.handleClick} className='park-index-item'>
      <h3>{this.props.park.description}</h3>
      <img src={this.props.park.image} />
    </li>
    );
  }
}

export default ParkIndexItem;
