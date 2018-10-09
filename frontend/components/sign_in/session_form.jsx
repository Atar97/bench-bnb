import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        password: ''
      };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user})
    .then(this.props.history.push({pathname: '/'}));
  }

  handleChange(type) {
    return (event) => this.setState({[type]: event.target.value});
  }

  render() {

    const link = <Link className='button'
        to='/signup'>Sign Up Instead</Link>;

    return (
      <form className='form user-form'
        onSubmit={this.handleSubmit.bind(this)}>
        <h2>{this.props.formType}
          {this.props.formType !== 'Sign Up' ? link : ''}</h2>
        <p>{this.props.errors}</p>
        <label>Email
          <input onChange={this.handleChange('email')}
            type='text' value={this.state.email}></input>
        </label>
        <label>Username
          <input onChange={this.handleChange('username')}
            type='text' value={this.state.username}></input>
        </label>
        <label>Password
          <input onChange={this.handleChange('password')}
            type='password' value={this.state.password}></input>
        </label>
          <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
