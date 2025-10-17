import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FitnessContext } from '../FitnessContext';

function Register() {
  const { setUser } = useContext(FitnessContext);
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      const data = await res.json();
      setUser(data); // Automatically log in newly registered user

      alert('Registered successfully!');
      // Optionally navigate to dashboard/home

      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-semibold mb-3">Register</h2>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default Register;
