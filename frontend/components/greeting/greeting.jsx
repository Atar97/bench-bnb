import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    debugger;
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <nav>
          <h2>Hello {this.props.currentUser.username}</h2>
          <button onClick={this.handleClick.bind(this)}>Logout</button>
        </nav>

      );
    } else {
      return (
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>
      );
    }
  }
};

export default Greeting;
