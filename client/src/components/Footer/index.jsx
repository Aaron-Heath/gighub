import './style.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import FavoritesIcon from './FavoritesIcon';
import SearchIcon from './SearchIcon';
import RecentsIcon from './RecentsIcon';
import "./style.css"
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const theme = createTheme({
    palette: {
      textColor: { darkRed: '#711F31' },
      background: { yellow: '#FFE5A1' }
    },
  });



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
        
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        
      >
        <BottomNavigationAction label="Recents" icon={<RecentsIcon />} sx={{ color:"textColor.darkRed" }} />
        <BottomNavigationAction label="Favorites" icon={<FavoritesIcon />} sx={{ color:"textColor.darkRed" }} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} sx={{ color:"textColor.darkRed" }} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  );
}