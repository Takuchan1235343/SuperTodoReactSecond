import React, { useState } from 'react';
import Todo from './Todo';
import { useAuth } from './hooks/useAuth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, signIn, signOut, user, errorMessage } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <div className="todo-container">
            <div className="welcome-text">Welcome, {user.email}</div>
            <div className="todo-actions">
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
          <div className="todo-content">
            <Todo/>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={() => signIn(email, password)}>Sign In</button>
            <button
              className="sign-up"
              onClick={() => signUp(email, password)}
            >
              Sign Up
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
