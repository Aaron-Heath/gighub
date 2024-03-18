import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import { redirectToLast } from '../../utils/pages';
import { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

import Auth from '../../utils/auth';

export default function LoginPage() {


    const [badLogin, setBadLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    // Define mutation
    const [loginUser] = useMutation(LOGIN_USER);

    const handleInputChange = (e) => {
        //Login logic goes here
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        setBadLogin(false);

        if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setPassword(inputValue);
        };
    };

    const handleFormSubmit = async (e) => {

        setBadLogin(false);

        e.preventDefault();

        try {
            console.log(email, password);
            const response = await loginUser({
                variables: {
                    email: email, password: password
                }
            });
            console.log(JSON.stringify(response));
            if (response.error) {
                setBadLogin(true);
                throw new Error('Something went wrong')

            };

            // console.log(response)
            const { token, user } = await response.data.login;
            console.log(user);
            Auth.login(token);
            console.log(token);
            // redirectToLast();
            navigate("/");

        } catch (err) {
            console.error(err);
            setBadLogin(true);
        }
    }

    return (

        <div>
            <div>
                <img src={gighubLogo} />
                <Box className="login-container"
                    gap={4}
                    sx={{
                        border: '4px solid #FBF4E6',
                        flexGrow: 1,
                        alignContent: "center"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >

                    <h2>Login</h2>
                    <TextField className="form" id="outlined-basic" name='email' type="email" value={email} label="Email" variant="outlined" onChange={handleInputChange} />
                    <TextField className="form" id="outlined-basic" name='password' type="password" value={password} label="Password" variant="outlined" onChange={handleInputChange} />
                    {badLogin ? (
                        <div className='errorText'>Error</div>
                    ) : (
                        <></>
                    )}

                    <div className='sign-up-text'>
                        <h3>Don't Have an Account?</h3>
                        <Link to="/signup"><h4>Sign up Here!</h4></Link>
                    </div>

                    <Button className='login-button' type="submit" variant="contained" color="primary" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Box>

            </div>
        </div>
    )
} 
