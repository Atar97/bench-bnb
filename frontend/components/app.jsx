import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route, Link, HashRouter} from 'react-router-dom';

const App = () => {
  debugger;
  return (
    <div>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
    </div>
  );
};

export default App;
