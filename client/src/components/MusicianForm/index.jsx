
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';
import * as React from 'react';
// import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

// Props given for update functionality
export default function MusicianForm({ stageName, publicEmail, city}) {

    
    const options = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const defaultOption = "State";

    return (
        <div>
            <div className='musicianSignUp-container'>
                <Box
                    sx={{
                        flexGrow: 1,
                        alignContent: "center"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <div className='musicianForms'>
                        <TextField id="outlined-basic" label="Stage Name" variant="outlined" margin="dense" value={stageName} name='stageName'/>
                        <TextField id="outlined-basic" label="Public Email" variant="outlined" margin="dense" value={publicEmail} name='publicEmail'/>
                        <TextField id="outlined-basic" label="City" variant="outlined" margin="dense" value={city} name='city'/>
                        <Dropdown controlClassName="dropdown" menuClassName="dropdown" options={options} value={defaultOption} placeholder="Select an option" name='state'/>
                        <p>*This will be shown on your profile</p>
                    </div>
                </Box>
            </div>
        </div>
    )
}
