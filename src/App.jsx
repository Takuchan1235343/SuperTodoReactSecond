import React, { useState , useEffect} from 'react';
import { auth } from './firebaseConfig';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import Todo from './Todo';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => onAuthStateChanged(auth, (user) => setUser(user)), [])

  const handleSignUp = async () => {
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('このメールアドレスはすでに使用されています。');
      } else {
        setError(error.message);
      }
    }
  };

  const handleSignIn = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('ユーザーが見つかりません。');
      } else if (error.code === 'auth/wrong-password') {
        setError('パスワードが正しくありません。');
      } else {
        setError(error.message);
      }
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="todo-container">
            <div className="welcome-text">Welcome, {user.email}</div>
            <div className="todo-actions">
              <button onClick={handleSignOut}>Sign Out</button>
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
            <button onClick={handleSignIn}>Sign In</button>
            <button
              className="sign-up"
              onClick={handleSignUp}
            >Sign Up
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
