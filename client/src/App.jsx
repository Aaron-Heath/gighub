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
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import MusicianBio from './pages/MusicianBio'

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
    <>
    <ApolloProvider client={client}>
      <main>
        <Header />
        <Outlet />
      </main>
      </ApolloProvider>
  
    </>
  )
}

export default App
