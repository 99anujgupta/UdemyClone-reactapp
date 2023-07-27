import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your login logic here
    // For simplicity, let's just check if the username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Implement your account creation logic here
    // For simplicity, we'll just log the newUsername and newPassword
    console.log('New Username:', newUsername);
    console.log('New Password:', newPassword);
  };

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <hr />
          <h2>Create New Account</h2>
          <form onSubmit={handleCreateAccount}>
            <input
              type="text"
              placeholder="New Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit">Create Account</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          {/* Add your main application content here */}
        </div>
      )}
    </div>
  );
};

export default Login;
