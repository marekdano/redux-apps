import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions';
import './LoginPage.css';

const LoginPage = ({ error, loading, login, signup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="LoginPage">
      <p>Please log in or sign up to continue.</p>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Username
          <input
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <div className="error">{error.message}</div>
        )}
        <button
          type="submit"
          disabled={loading}
          onClick={() => login(username, password)}
        >
          Login
        </button>
        <button
          disabled={loading}
          onClick={() => signup(username, password)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
	loading: state.user.loading,
	error: state.user.error
});
const mapDispatchToProps = { signup, login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
