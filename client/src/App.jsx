// export default App
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import AccountSettings from './pages/AccountSettings';
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

// Creates instance of graphql endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

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
    <ApolloProvider client={client}>
    <>
    <ApolloProvider client={client}>
      <main>
        <Header />
        {/* <MusicianBio /> */}
        < AccountSettings />
        <Outlet />
      </main>
      </ApolloProvider>
  
    </>
    </ApolloProvider>
  )
}

export default App;


