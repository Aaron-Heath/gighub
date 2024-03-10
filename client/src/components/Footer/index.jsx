import './style.css';
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { ThemeProvider, Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import FavoritesIcon from './FavoritesIcon';
import SearchIcon from './SearchIcon';
import SettingsIcon from './SettingsIcon';
// import Link from '@mui/material/Link';
// import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./style.css"




export default function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  // handle clicks on nav buttons
 const handleChange = (event, newValue) => {
  setValue(newValue);
  switch (newValue) {
    case 0:
      navigate("/settings");
      break;
    case 1:
      navigate("/favorites");
      break;
    case 2:
      navigate("/");
      break;
    default:
      break;
  }
 }
// --------------------------------------


  // Handle colors of Navigation footer
  const theme = createTheme({
    palette: {
      textColor: { darkRed: '#711F31' },
      background: { yellow: '#FFE5A1' }
    },
  });
  // ----------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: "100%",
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{ backgroundColor: "background.yellow" }}
          onChange={handleChange}

        >
          <BottomNavigationAction id="settingsNav" label="Settings" icon={<SettingsIcon />} sx={{ color: "textColor.darkRed" }} />
          <BottomNavigationAction id="favoritesNav" label="Favorites" icon={<FavoritesIcon />} sx={{ color: "textColor.darkRed" }} />
          <BottomNavigationAction id="searchNav" label="Search" icon={<SearchIcon />} sx={{ color: "textColor.darkRed" }} />

        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}