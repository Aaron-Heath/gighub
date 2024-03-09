// export default App
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useStateValue } from './StateProvider';

// mock backend for now
const userEmail = {
  authenticate: async (email, password) => {
    // Simulate a request to your backend authentication endpoint
    return new Promise((resolve, reject) => {
      // Simulate a delay for the request
      setTimeout(() => {
        // Replace the following with your actual backend response handling
        if (email === 'example@example.com' && password === 'password123') {
          resolve({ email: 'example@example.com' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },
};

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        // Replace the following with your actual login form data
        const email = 'example@example.com';
        const password = 'password123';

        // Simulate authentication with the backend
        const authenticatedUser = await userEmail.authenticate(email, password);

        dispatch({
          type: 'SET_USER',
          user: authenticatedUser,
        });
      } catch (error) {
        console.error('Authentication failed:', error.message);
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    };

    // Simulate the effect of authentication state changes
    authenticateUser();
  }, [dispatch]);

  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;


