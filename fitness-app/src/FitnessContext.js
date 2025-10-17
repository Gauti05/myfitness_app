import React, { createContext, useState, useEffect } from 'react';

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Read user from localStorage on startup
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState([]);
  const [meals, setMeals] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
      setProfile(null);
      setProgress([]);
      setMeals([]);
      setWorkouts([]);
      setChat([]);
    }
  }, [user]);

  const logout = () => {
    setUser(null);
  };

  return (
    <FitnessContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        progress,
        setProgress,
        meals,
        setMeals,
        workouts,
        setWorkouts,
        chat,
        setChat,
        logout,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};
