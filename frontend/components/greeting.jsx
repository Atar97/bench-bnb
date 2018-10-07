import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.currentUser) {
      return (
        <h2>Hello {this.props.currentUser.username}</h2>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
};

export default Greeting;
