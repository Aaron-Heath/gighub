// export default App
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
import { 
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { useStateValue } from './StateProvider';
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import MusicianBio from './pages/MusicianBio'

// mock backend for now
const userEmail = {
  authenticate: async (email, password) => {
    // Simulate a request to your backend authentication endpoint
    return new Promise((resolve, reject) => {
      // Simulate a delay for the request
      setTimeout(() => {
        // Replace with our actual backend
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
        // replace with our actual form data
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

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <>
    <ApolloProvider client={client}>
      <main>
        <Header />
        <Outlet />
      </main>
      </ApolloProvider>
  
    </>
  );
}

export default App;


