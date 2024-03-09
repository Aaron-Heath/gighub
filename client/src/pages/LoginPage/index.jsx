import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import { redirectToLast } from '../../utils/pages';

export default function LoginPage() {

    const handleLogin = (e) => {
        //Login logic goes here

        
        // Redirects to last stored page or home
        redirectToLast();
    }

    return (

        <div>
            <div>
                <img src={gighubLogo} />
                <Box className="login-container"    
                    gap={4}
                    sx={{ border: '4px solid #FBF4E6',
                    flexGrow: 1,
                    alignContent: "center" }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    
                    <h2>Login</h2>
                    <TextField className="form" id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className="form" id="outlined-basic" type="password" label="Password" variant="outlined" />

                    <div className='sign-up-text'>
                    <h3>Don't Have an Account?</h3>
                    <h4>Sign up Here!</h4>
                    </div>
                </Box>

            </div>
        </div>
    )
} 
