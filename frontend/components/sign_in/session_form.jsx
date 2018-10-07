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
    this.setState({
        username: '',
        email: '',
        password: ''
      });
    this.props.processForm({user});
  }

  handleChange(type) {
    return (event) => this.setState({[type]: event.target.value});
  }

  render() {
    let link = <Link to='/login'>Login</Link>;

    if (this.props.formType === 'Login') {
      link = <Link to='/signup'>Sign Up</Link>
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>{this.props.formType}</h2>
        <p>{this.props.errors}</p>
        {link}
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
        <button>Submit</button>
      </form>
    );
  }
}

export default SessionForm;
