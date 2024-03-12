import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import './style.css';
import { settingVariants } from "./indexVariants";
import { motion } from 'framer-motion';
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_MUSICIAN, UPDATE_USER, ADD_MUSICIAN } from '../../utils/mutations';
import { GET_USER, GET_MUSICIAN_BY_ID } from '../../utils/queries';
import Auth from '../../utils/auth';


export default function AccountSettings() {
    const userId = Auth.getUser().data._id
    console.log(userId)

    const [updateUser] = useMutation(UPDATE_USER);
    const [updateMusician] = useMutation(UPDATE_MUSICIAN);
    const [createMusician] = useMutation(ADD_MUSICIAN);

    const { loading, data } = useQuery(GET_USER, {
        variables: { _id: userId}
    });
    const users = data?.user || []
    console.log(users)
    const getMusicianById = useQuery(GET_MUSICIAN_BY_ID);

    // Gets data for user before update
    const getUserDetails = async (userId) => {
        try {
            const checkUser = await getUserData({ variables: { _id: userId } });
            const { checkUserData } = await checkUser.data.getUser;
            console.log(checkUserData)

            if (response.error) {
                throw new Error('Something went wrong')
            }

            return { checkUserData };

        } catch (err) {
            console.error(err)
        }
    }

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        getUserDetails();

        try {
            // User update function
            const userResponse = await updateUser({
                variables: {
                    email: email,
                    username: username,
                    first: first,
                    last: last,
                    isMusician: isMusician
                }
            });

            // If user was already a musician, allow that form to be updated
            if (checkUserData.isMusician === 'true') {
                const musicianResponse = await updateMusician({
                    variables: {
                        imageLink: imageLink,
                        stageName: stageName,
                        publicEmail: publicEmail,
                        description: description,
                        city: city,
                        state: state,
                        minCost: minCost
                    }
                });

                console.log(musicianResponse)
                // If user changes to a musician, allow form for creating a new musician bio
            } else if (userResponse.isMusician === 'true') {
                const musicianResponse = await createMusician({
                    variables: {
                        imageLink: imageLink,
                        stageName: stageName,
                        publicEmail: publicEmail,
                        description: description,
                        tags: tags,
                        city: city,
                        state: state,
                        minCost: minCost
                    }
                });

                console.log(musicianResponse)
            };


            if (response.error) {
                throw new Error('Something went wrong')
            };

            const { token, user } = await response.data.updateUser;
            Auth.login(token)
            console.log('User: ', user)
            console.log('Token: ', token)
            console.log('Musician: ', musicianResponse)

        } catch (err) {
            console.error(err)
        }
    }




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


                    <TextField className="form" id="username" label="Username" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="email" label="Email" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="first" label="First" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                    <TextField className="form" id="last" label="Last" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

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
        </div>
    );
}

