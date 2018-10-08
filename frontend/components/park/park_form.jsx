import React from 'react';
import {connect} from 'react-redux';

import {createPark} from '../../actions/park_actions';

class ParkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      image: '',
      lat: '',
      lng: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Description:
          <input onChange={this.handleInput('description')}
            value={this.state.description}></input>
        </label>
        <label>Lattitude:
          <input onChange={this.handleInput('lat')}
            value={this.state.lat}></input>
        </label>
        <label>Longitude:
          <input onChange={this.handleInput('lng')}
            value={this.state.lng}></input>
        </label>
        <label>Image (optional):
          <input onChange={this.handleInput('image')}
            value={this.state.image}></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const park = {park: Object.assign({}, this.state)};
    this.props.createPark(park).then(this.setState(
      {
        description: '',
        image: '',
        lat: '',
        lng: ''
      }
    ));
  }

  handleInput(type) {
    return (event) => {
      this.setState({[type]: event.target.value});
    };
  }
}

const mapDispatchToProps = () => dispatch => ({
  createPark: park => dispatch(createPark(park))
});

export default connect(null, mapDispatchToProps)(ParkForm);
