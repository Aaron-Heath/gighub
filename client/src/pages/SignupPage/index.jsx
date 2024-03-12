import * as React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/client'; // Import useMutation
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MuscianForm from "../../components/MusicianForm"
import Button from '@mui/material/Button';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import "./style.css";
import { ADD_MUSICIAN, ADD_USER } from '../../utils/mutations';

export default function SignupPage() {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    // Mutation for adding user
    const [addUser] = useMutation(ADD_USER);

    // Mutation for adding musician
    const [addMusician] = useMutation(ADD_MUSICIAN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form submission logic to create a new user and optionally a musician profile
        try {
            // Perform form validation and gather form data
            const formData = {
                // Collect form data
            };

            // Execute addUser mutation
            const { data: { addUser: { user } } } = await addUser({ variables: formData });

            // If user is a musician, execute addMusician mutation
            if (isChecked) {
                // Prepare musician data
                const musicianData = {
                    user: { ...user }, // Pass user object received from addUser mutation
                    // Collect musician form data
                };

                // Execute addMusician mutation
                const { data: { addMusician: musician } } = await addMusician({ variables: musicianData });
                console.log('Musician added:', musician);
            }

            console.log('User added:', user);
            // Handle success (e.g., redirect to another page)
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    };

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
                onSubmit={handleSubmit} // Handle form submission
            >
                <img src={gighubLogo} alt="Gighub Logo" />
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
                    <label htmlFor="yesCheck"> Yes</label><br />
                    <input
                        type="checkbox"
                        id="noCheck"
                        name="noCheck"
                        value="No"
                    />
                    <label htmlFor="noCheck"> No</label>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />

                </div>
                <Button type="submit" variant="outlined" id="signupBtn">Submit</Button> {/* Use type="submit" for form submission */}
            </Box>
            {/* Render musician form if user is musician */}
            {isChecked && <MuscianForm />}
        </div>
    );
}