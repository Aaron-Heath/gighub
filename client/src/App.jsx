// export default App
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import AccountSettings from './pages/AccountSettings';
import './App.css'
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

function App() {

  return (
    <ApolloProvider client={client}>
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
    </ApolloProvider>
  )
}

export default App;


