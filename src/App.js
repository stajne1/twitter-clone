import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact><LandingPage /></Route>
          <Route path='/login'><LogIn /></Route>
          <Route path='/signup'><SignUp /></Route>
          <Route path='/password-reset'><PasswordReset /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
