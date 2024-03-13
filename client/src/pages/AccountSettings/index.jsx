import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
// import gighubLogo from "../../assets/images/Gighub-290px.png";
import './style.css';
import { settingVariants } from "./indexVariants";
import { motion } from 'framer-motion'
import SettingsForm from "../../components/SettingsForm";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import { GET_TAGS } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Auth from '../../utils/auth';
import { UPDATE_USER, UPDATE_MUSICIAN, ADD_MUSICIAN } from "../../utils/mutations";
import { GET_USER, GET_MUSICIAN_BY_ID } from "../../utils/queries";


export default function AccountSettings() {
    // Get user authentication to find user data later
    const userId = Auth.getUser().data._id
    console.log(userId)

    const [updateUser] = useMutation(UPDATE_USER);
    const [updateMusician] = useMutation(UPDATE_MUSICIAN);
    const [createMusician] = useMutation(ADD_MUSICIAN);

    // Gets user info at page load
    const { loading, data } = useQuery(GET_USER, {
        variables: { userId: userId }
    });
    console.log(data)
    const userData = data.userById
    console.log(userData)

    // Sets the state according to preexisting data
    const [email, setEmail] = useState(userData.email);
    const [username, setUsername] = useState(userData.username);
    const [first, setFirst] = useState(userData.first)
    const [last, setLast] = useState(userData.last);
    const [isMusician, setIsMusician] = useState(userData.isMusician)

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Switch case to handle state changes
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'username':
                setUsername(value);
                break;

            case 'first':
                setFirst(value);
                break;

            case 'last':
                setLast(value);
                break;

            case 'isMusician':
                setIsMusician(e.target.checked);
                break;

            default:
                break;
        }
    }


    const handleFormSubmit = async (e) => {

        e.preventDefault();


        try {
        } catch (err) {
            console.error(err)
        }
    }




    storePage();



    return (
        <div>
            <Header />
            {/* {loading ? (<p>loading</p>) : ( */}
            <div>

                {/* <img src={gighubLogo} alt="Logo" /> */}
                <Box
                    className="settings-container"
                    gap={4}
                    sx={{
                        // border: '4px solid #FFE5A1',
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
                        style={{ marginTop: '30px', color: 'white' }}
                    >
                        Settings
                    </motion.div>


                    <TextField className="form" id="username" variant="outlined" value={username}
                        style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="email" variant="outlined" value={email}
                        style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="first" variant="outlined" value={first}
                        style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="last" variant="outlined" value={last}
                        style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <div className="checkbox-container">
                        <input type="checkbox" id="checkbox" className="checkbox-input" />
                        <label htmlFor="checkbox" className="checkbox-label">Are you a musician?</label>
                    </div>

                    {/*                    
            
                    
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

                    <TextField className="form" id="tags" label="Search for Tags" variant="outlined" style={{backgroundColor: "#711F31", color: "#FFE5A1", border:'2px solid #FFE5A1',borderRadius: '10px', width: '80%', marginBottom: '10px'}} /> */}

                    <div className='save-button'>
                        <Button variant="contained" onClick={handleFormSubmit} style={{ backgroundColor: "#711F31", color: "#FFE5A1", borderRadius: '10px', marginTop: '50px', marginBottom: '50px' }}>
                            Save Changes
                        </Button>
                    </div>
                </Box>
            </div>
            {/* )} */}
        </div>
    );
}

