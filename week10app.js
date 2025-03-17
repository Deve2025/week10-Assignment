import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <ProtectedRoute path="/home" component={Home} />
              <Route path="/" exact component={Login} />
            </Switch>
          </div>
          </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      localStorage.setItem('auth', 'true');
      history.push('/home');
    } else {
        alert('Invalid credentials');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSignup = () => {
    //assign local storage
    localStorage.setItem('auth', 'true');
    history.push('/home');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder="Email"
     />
     <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       placeholder="Password"
     />
     <button onClick={handleSignup}>Sign Up</button>
     <p>
     Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;


  