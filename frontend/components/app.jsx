import React from 'react';
import {Route, Link, HashRouter} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import {SignupForm, LoginForm} from './sign_in/session_forms_container';
import SearchContainer from './map/search_container';
import ParkForm from './park/park_form';

const App = () => {
  return (
    <div>
      <header className='main-header'>
        <Link to="/" className="header-link home-link">
          <h1>Park Finder</h1>
        </Link>
        <GreetingContainer />
      </header>
      <div className='main-content'>
        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/signup" component={SignupForm} />
        <ProtectedRoute exact path="/" component={SearchContainer} />
        <ProtectedRoute path="/parks/new" component={ParkForm} />
      </div>

    <footer className='main-footer'>This is the footer</footer>
    </div>
  );
};

export default App;
