import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DollarSign from "../../components/DollarSign";

export default function ResultsList({ results }) {

    const navigateTo = useNavigate();

    // Sends to musician bio page
    const handleBandSearch = (id) => {
        navigateTo(`/musician/${id}`);
    }

    return (
        <List className="result-list"
            sx={{
                width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid',
                borderColor: 'divider'
            }}
            aria-label="contacts"
        >
            {results.map((result, index) => (
                <React.Fragment key={index}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleBandSearch(result._id)}> {/* Pass result._id to handleBandSearch */}
                            <ListItemText inset primary={result.stageName} secondary={`${result.city}, ${result.state}`} />
                        </ListItemButton>
                        <DollarSign cost={result.minCost}/>
                    </ListItem>
                    <Divider component="li" />
                </React.Fragment>
            ))}
        </List>
    );
};
