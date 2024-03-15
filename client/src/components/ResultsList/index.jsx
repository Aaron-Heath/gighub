import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DollarSign from "../../components/DollarSign";

export default function ResultsList({ results }) {
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
                        <ListItemButton>
                            <ListItemText inset primary={result.stageName} secondary={`${result.city}, ${result.state}`} />
                        </ListItemButton>
                        <DollarSign />
                    </ListItem>
                    <Divider component="li" />
                </React.Fragment>
            ))}
        </List>
    );
};
