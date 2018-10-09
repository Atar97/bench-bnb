import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <nav className='user-nav'>
          <h2>Hello {this.props.currentUser.username}</h2>
          <button onClick={this.handleClick.bind(this)}
            className='logout-button'>Logout</button>
        </nav>

      );
    } else {
      return (
        <nav className='user-nav'>
          <Link to="/signup" className='header-link'>Sign Up</Link>
          <Link to="/login" className='header-link'>Log In</Link>
        </nav>
      );
    }
  }
};

export default Greeting;
