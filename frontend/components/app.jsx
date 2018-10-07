import React from 'react';
import GreetingContainer from './greeting_container';

const App = (props) => {
  return (<div>
    <h1>Bench BnB</h1>
    <GreetingContainer store={props.store}/>
  </div>
  );
};

export default App;
