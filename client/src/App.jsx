import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import MusicianBio from './pages/MusicianBio'

// Creates instance of graphql endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
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

export default App
