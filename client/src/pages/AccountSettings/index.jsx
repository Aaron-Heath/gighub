import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import './style.css';
import { settingVariants } from "./indexVariants";
import { motion } from 'framer-motion'


export default function AccountSettings(){
    storePage();
   
    return (
        <div>
            <div>
                {/* <img src={gighubLogo} alt="Logo" /> */}
                <Box
                    className="settings-container"
                    gap={4}
                    sx={{
                        border: '4px solid #FFE5A1',
                        borderRadius: 2,
                        flexGrow: 1,
                        alignContent: "center",
                        marginTop: '10px'
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    
                    <motion.div
  className="settings"
  variants={settingVariants}
//   initial="animate"
  animate='animate'
  whileHover='whileHover'
  style={{ marginTop: '60px', color: 'white' }}
>
  Settings
</motion.div>
     
                   
            
                    
                <TextField className="form" id="stageName" label=" Stage Name" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee'}}/>

                    
                    <TextField className="form" id="publicEmail" label=" Email" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}}/>

                  
                    <TextField className="form" id="city" label="City" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}} />

                    <TextField className="form" id="state" label="State" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}} />

                    <TextField className="form" id="imageLink" label="Image Link" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}} />

                    <TextField
                        className="form"
                        id="description"
                        label=" Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}}
                    />

                    <TextField className="form" id="tags" label="Search for Tags" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}} />

                    <div className='save-button'>
                        <Button variant="contained" style={{ backgroundColor: "#711F31", color: "#FFE5A1", borderRadius: '10px', marginTop: '50px',marginBottom: '50px'}}>
                            Save Changes
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
}
  
