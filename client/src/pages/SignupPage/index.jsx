import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MuscianForm from "../../components/MusicianForm"
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import "./style.css";




export default function SignupPage() {


    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);


    };

    if (isChecked) {
        return (
            <div className='signup-container'>
                <Box
                    sx={{
                        flexGrow: 1,
                        alignContent: "center"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <img src={gighubLogo} />
                    <div className='signup-forms'>
                        <h2>Sign Up</h2>
                        <p>Are you a musician?</p>
                        <input
                            type="checkbox"
                            id="yesCheck"
                            name="yesCheck"
                            value="Yes"
                            checked={isChecked}
                            onChange={handleOnChange}
                        />
                        <label for="yesCheck">Yes</label><br />
                        <input
                            type="checkbox"
                            id="noCheck"
                            name="noCheck"
                            value="No"
                        />
                        <label for="noCheck">No</label>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />
                    </div>
                    
                </Box>
                <MuscianForm />
                <Button variant="outlined" id="signupBtn">Submit</Button>
            </div>
        )
    } else {

        return (

            <div className='signup-container'>

                <Box
                    sx={{
                        flexGrow: 1,
                        alignContent: "center"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <img src={gighubLogo} />
                    <div className='signup-forms'>
                        <h2>Sign Up</h2>
                        <p>Are you a musician?</p>
                        <input
                            type="checkbox"
                            id="yesCheck"
                            name="yesCheck"
                            value="Yes"
                            checked={isChecked}
                            onChange={handleOnChange}
                        />
                        <label for="yesCheck"> Yes</label><br />
                        <input
                            type="checkbox"
                            id="noCheck"
                            name="noCheck"
                            value="No"
                        />
                        <label for="noCheck"> No</label>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                        <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />

                    </div>
                    <Button variant="outlined" id="signupBtn">Submit</Button>
                </Box>

            </div>
        )
    }
}