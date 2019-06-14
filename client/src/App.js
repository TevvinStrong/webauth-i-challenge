import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Users from './Users.js';

function App() {
  return (
    <div>
      <h1>Welcome!</h1>

      <ul>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>

      <main>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

export default App;