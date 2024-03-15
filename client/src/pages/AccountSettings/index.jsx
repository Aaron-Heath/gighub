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
import { useState, useEffect } from "react";
import Dropdown from 'react-dropdown';
import { GET_TAGS } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Auth from '../../utils/auth';
import { UPDATE_USER, UPDATE_MUSICIAN, ADD_MUSICIAN } from "../../utils/mutations";
import { GET_USER, GET_MUSICIAN_BY_USER_ID } from "../../utils/queries";
import MusicianForm from "../../components/MusicianForm";


export default function AccountSettings() {
    // Get user authentication to find user data later
    const userId = Auth.getUser().data._id
    console.log(userId)

    const [updateUser] = useMutation(UPDATE_USER);
    const [updateMusician] = useMutation(UPDATE_MUSICIAN);
    const [createMusician] = useMutation(ADD_MUSICIAN);

    // Gets user info at page load
    const { loading: userLoading, data: userQueryData } = useQuery(GET_USER, {
        variables: { userId: userId }
    });
    console.log('User data: ', userQueryData)

    
    const { loading: musicianLoading, data: musicianQueryData } = useQuery(GET_MUSICIAN_BY_USER_ID, {
        variables: { userId: userId }
    });
    console.log('Musician data: ', musicianQueryData);

    const options = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const defaultOption = "State";


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('');
    const [isMusician, setIsMusician] = useState(false);
    const [stageName, setStageName] = useState('');
    const [publicEmail, setPublicEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    // Use effect to wait for data to load before applying it to state
    useEffect(() => {
        // Sets values according to existing data
        if (!userLoading && userQueryData) {
            const userData = userQueryData.userById;
            setEmail(userData.email);
            setUsername(userData.username);
            setFirst(userData.first);
            setLast(userData.last);
            setIsMusician(userData.isMusician);

            
            // If user is already a musician, set props
            if (userData.isMusician && !musicianLoading && musicianQueryData.musicianByUserId !== null) {
                console.log('Musician data: ', musicianQueryData);
                
                // Sets values according to existing data
                if (!musicianLoading && musicianQueryData) {
                    const musicianData = musicianQueryData.musicianByUserId;
                    setStageName(musicianData.stageName);
                    setPublicEmail(musicianData.publicEmail);
                    setCity(musicianData.city);
                }

            }

        }
    }, [userLoading, userQueryData, musicianLoading, musicianQueryData]);




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

            case 'stageName':
                setStageName(value);
                break;

            case 'publicEmail':
                setPublicEmail(value);
                break;

            case 'city':
                setCity(value);
                break;

            default:
                break;
        };
    };

    const handleDropdownChange = (selectedOption) => {
        setState(selectedOption.value)
    }


    const handleFormSubmit = async (e) => {

        e.preventDefault();

        // console.log(userId, email, username, first, last, isMusician)

        try {
            const userResponse = await updateUser({
                variables: {
                    id: userId,
                    email: email,
                    username: username,
                    first: first,
                    last: last,
                    isMusician: isMusician
                }

            });
            console.log('HERE')
            console.log(userId, stageName, publicEmail, city, state)

            if (musicianQueryData.musicianByUserId === null) {
                const musicianResponse = await createMusician({
                    variables: {
                        user: userId,
                        stageName: stageName,
                        publicEmail: publicEmail,
                        city: city,
                        state: state

                    }
                });

                console.log(musicianResponse.data)
                const { musician } = await musicianResponse.data.addMusician;
                console.log(musician) 
            };

            if (userResponse.error) {
                throw new Error('Something went wrong');
            };

            console.log(userResponse.data);
            const { user } = await userResponse.data.updateUser
            console.log(user)

        } catch (err) {
            console.error(err)
        }
    };





    storePage();

    if (userLoading) {
        return <div>Loading...</div>;
    };


    if (isMusician) {
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


                        <TextField className="form" id="username" variant="outlined" value={username} onChange={handleInputChange} name="username"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="email" variant="outlined" value={email} onChange={handleInputChange} name="email"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="first" variant="outlined" value={first} onChange={handleInputChange} name="first"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="last" variant="outlined" value={last} onChange={handleInputChange} name="last"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <div className="checkbox-container">
                            <input type="checkbox" id="checkbox" className="checkbox-input" checked={isMusician} name="isMusician" onChange={handleInputChange} />
                            <label htmlFor="checkbox" className="checkbox-label">Are you a musician?</label>
                        </div>
                    </Box>
                </div>

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
                        <TextField id="outlined-basic" label="Stage Name" variant="outlined" margin="dense" value={stageName} onChange={handleInputChange} name='stageName'/>
                        <TextField id="outlined-basic" label="Public Email" variant="outlined" margin="dense" value={publicEmail} onChange={handleInputChange} name='publicEmail'/>
                        <TextField id="outlined-basic" label="City" variant="outlined" margin="dense" value={city} name='city' onChange={handleInputChange}/>
                        <Dropdown controlClassName="dropdown" menuClassName="dropdown" options={options} value={defaultOption} placeholder="Select an option" name='state' onChange={handleDropdownChange}/>
                        <p>*This will be shown on your profile</p>
                    </div>
                </Box>
            </div>
        </div>

                
                <div className='save-button'>
                    <Button variant="contained" onClick={handleFormSubmit} style={{ backgroundColor: "#711F31", color: "#FFE5A1", borderRadius: '10px', marginTop: '50px', marginBottom: '50px' }}>
                        Save Changes
                    </Button>
                </div>
            </div>
        )
    } else {
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


                        <TextField className="form" id="username" variant="outlined" value={username} onChange={handleInputChange} name="username"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="email" variant="outlined" value={email} onChange={handleInputChange} name="email"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="first" variant="outlined" value={first} onChange={handleInputChange} name="first"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <TextField className="form" id="last" variant="outlined" value={last} onChange={handleInputChange} name="last"
                            style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: '50px', fontFamily: 'Bungee' }} />

                        <div className="checkbox-container">
                            <input type="checkbox" id="checkbox" className="checkbox-input" checked={isMusician} name="isMusician" onChange={handleInputChange} />
                            <label htmlFor="checkbox" className="checkbox-label">Are you a musician?</label>
                        </div>



                        <div className='save-button'>
                            <Button variant="contained" onClick={handleFormSubmit} style={{ backgroundColor: "#711F31", color: "#FFE5A1", borderRadius: '10px', marginTop: '50px', marginBottom: '50px' }}>
                                Save Changes
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        )
    }
}

