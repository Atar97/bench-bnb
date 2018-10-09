import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {createPark} from '../../actions/park_actions';

class ParkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      image: '',
      lat: this.props.lat,
      lng: this.props.lng
    };
    this.handleInput = this.handleInput.bind(this);
  }
  render() {
    return (
      <form className='form park-form'
        onSubmit={this.handleSubmit.bind(this)}>
        <label>Description:
          <input onChange={this.handleInput('description')}
            value={this.state.description}></input>
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
    )).then(this.props.history.push({pathname: '/'}));
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

const mapStateToProps = (state, {location}) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps)
  (ParkForm));
