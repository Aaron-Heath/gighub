import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginPage() {


    return (

        <div>
            <div>

                <Box className="login-container"    
                    height={300}
                    width={200}
                    my={4}
                    gap={2}
                    borderRadius={10}
                    p={5}
                    sx={{ border: '4px solid #FBF4E6' }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <h2>Login</h2>
                    <TextField className="form" id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className="form" id="outlined-basic" label="Password" variant="outlined" />

                    <h3>Don't Have an Account? Sign up here!</h3>
                </Box>

            </div>
        </div>
    )
} 