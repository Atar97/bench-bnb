import React from 'react';
import {Route, Link, HashRouter} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import {SignupForm, LoginForm} from './sign_in/session_forms_container';
import SearchContainer from './map/search_container';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Bench BnB</h1>
        </Link>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={LoginForm} />
      <AuthRoute path="/signup" component={SignupForm} />
      <Route exact path="/" component={SearchContainer} />

    </div>
  );
};

export default App;
