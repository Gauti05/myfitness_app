import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Progress from './Pages/Progress';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import { useState } from 'react';
// Import FitnessContext Provider
import { FitnessProvider } from './FitnessContext';

function App() {
  return (
    <FitnessProvider> {/* Wrap your app with FitnessProvider */}
      <div className='min-h-screen relative bg-gradient-to-r from-pink-300 via-orange-300 to-purple-300 overflow-hidden p-2 sm:p-4'>
        {/* Background blobs */}
        <div className='background'>
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl py-4 px-2 sm:px-4 md:px-8 mt-4 mb-4">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/progress' element={<Progress />} />
            <Route path='/chat' element={<Chat />} />

               <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </FitnessProvider>
  );
}

export default App;
