import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route, Link, HashRouter} from 'react-router-dom';
import {SignupForm, LoginForm} from './sign_in/session_forms_container';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Bench BnB</h1>
        </Link>
        <GreetingContainer />
      </header>

      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />

    </div>
  );
};

export default App;
