import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import './style.css';


export default function AccountSettings(){
    storePage();
   
    return (
        <div>
            <div>
                <img src={gighubLogo} alt="Logo" />
                <Box
                    className="settings-container"
                    gap={4}
                    sx={{
                        border: '4px solid #FFE5A1',
                        borderRadius: 2,
                        flexGrow: 1,
                        alignContent: "center",
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <h2>Settings</h2>
                    
                    {/* Change/Update Stage Name */}
                    <TextField className="form" id="stageName" label=" Stage Name" variant="outlined" />

                    {/* Change/Update Public Email */}
                    <TextField className="form" id="publicEmail" label=" Email" variant="outlined" />

                    {/* Change/Update City */}
                    <TextField className="form" id="city" label="City" variant="outlined" />

                    {/* Change/Update State */}
                    <TextField className="form" id="state" label="State" variant="outlined" />

                    {/* Change/Update Image Link */}
                    <TextField className="form" id="imageLink" label="Image Link" variant="outlined" />

                    {/* Change/Update Description */}
                    <TextField
                        className="form"
                        id="description"
                        label=" Description"
                        multiline
                        rows={4}
                        variant="outlined"
                    />

                    {/* Choose from Tags */}
                    <TextField className="form" id="tags" label="Choose from Tags" variant="outlined" />

                    <div className='save-button'>
                        <Button variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
}
  
