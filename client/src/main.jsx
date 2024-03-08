import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SearchPage from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import FavoritesPage from "./pages/Favorites"
import SettingsPage from "./pages/AccountSettings"
import MusicianBio from './pages/MusicianBio';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  //   errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/musician/:id',
        element: <MusicianBio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
