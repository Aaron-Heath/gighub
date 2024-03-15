import { storePage } from "../../utils/pages";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import './style.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Heart from '../../assets/images/favorites.png'
export default function Favorites() {
    storePage();
    return(
        <>
        <Header/>
        <div className="fav-container">
        <h1 className="fav-title">My Favorites</h1>
        <List className="result-list"
                sx={{
                    width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid',
                    borderColor: 'divider'
                }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                  <img className='fav-heart' src={Heart}></img>  
                    <ListItemButton>
                        <ListItemText inset primary="Result 1" secondary="Genre" />
                    </ListItemButton>
                 
                   </ListItem>
                <Divider component="li" />

                <ListItem disablePadding>
                <img className='fav-heart' src={Heart}></img>
                    <ListItemButton>
                        <ListItemText inset primary="Result 2" secondary="Genre"/>
                    </ListItemButton>
                    
                </ListItem>

                <Divider component="li" />
            </List>
        </div>
        <Footer/>
        </>
    )
}