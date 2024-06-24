// Loginpage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication modules
import { app } from '../firebase'; // Import Firebase app instance

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth(app); // Get the auth instance from your Firebase app
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);

      // Redirect to dashboard or another page after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Failed to sign in. Please check your credentials.'); // Set error state for displaying to the user
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area" style={{ width: 930 }}>
        {/* Left Box */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: 'linear-gradient(131.38deg, #E38B54 1.06%, #FFFFFF 222.41%)', borderRadius: '20px' }}>
          {/* You can customize the left box content here */}
        </div>

        {/* Right Box */}
        <div className="col-md-6 right-box" style={{ padding: '40px 30px 40px 40px' }}>
          <div className="row align-items-center">
            <h2 className="header-text mb-4">Login</h2>

            {error && <div className="error">{error}</div>}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-lg btn-primary w-100 fs-6 mb-3" style={{ backgroundColor: '#ED6A09' }} onClick={handleLogin}>
              Login
            </button>
            <div className="row">
              <small>Don't have an account? <Link to="/register">Register</Link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
