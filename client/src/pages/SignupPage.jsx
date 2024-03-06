import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




export default function SignupPage() {



    return (
        <div className='signup-container'>
            <Box
                width={200}
                my={4}
                gap={4}
                borderRadius={10}
                p={5}
                sx={{ border: '4px solid grey' }}
                component="form"
                noValidate
                autoComplete="off"
            >
                <h2>Sign Up</h2>
                <div className='signup-forms'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />
                </div>
            </Box>
        </div>
    )
}