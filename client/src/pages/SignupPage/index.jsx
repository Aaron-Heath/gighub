import * as React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/client'; // Import useMutation
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MusicianForm from "../../components/MusicianForm"
import Button from '@mui/material/Button';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import "./style.css";
import { ADD_MUSICIAN, ADD_USER } from '../../utils/mutations';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

export default function SignupPage() {
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    

    // Mutation for adding user
    const [addUser] = useMutation(ADD_USER);

    // Mutation for adding musician
    const [addMusician] = useMutation(ADD_MUSICIAN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const first = document.getElementById("first-name").value;
        const last = document.getElementById("last-name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const isMusician = document.getElementById("yesCheck").checked;

        console.log(password);

        if (password!== password2) {
            alert("passwords must match");
            return;
        }

        // Form submission logic to create a new user and optionally a musician profile
        try {
            // Execute addUser mutation
            const { data } = await addUser({ 
                variables: { email, password, username, first, last, isMusician }
            });
            console.log(data);

            if(data) {
                alert("User created!");
                navigate("/login");
            }
            
           

            // If user is a musician, execute addMusician mutation
            if (isChecked) {
                // Process MusicianData
                const stageName = document.getElementById("stageName").value;
                const publicEmail = document.getElementById("publicEmail").value;
                const city = document.getElementById("city").value;
                const state = document.getElementById("state-select").value;
                const password = document.getElementById("password").value;
                const password2 = document.getElementById("password2").value;
                const user = data.addUser.user._id;
                console.log(state);
                
                const result = await addMusician({
                    variables: { user ,stageName, publicEmail, city, state, password, password2}
                });
                
                console.log(result);
            }



        } catch (error) {
            // Handle error
            console.error('Error:', error);
            alert("Error creating user!")
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
                    <TextField id="first-name" className="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                    <TextField id="last-name" className="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                    <TextField id="username" className="outlined-basic" label="Username" variant="outlined" margin="dense" />
                    <TextField id="email" className="outlined-basic" label="Email" variant="outlined" margin="dense" />
                    <TextField type="password" id="password" className="outlined-basic" label="Password" variant="outlined" margin="dense" />
                    <TextField type="password" id="password2" className="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />

                </div>
            {isChecked && <MusicianForm />}
                <Button type="submit" variant="outlined" id="signupBtn">Submit</Button> {/* Use type="submit" for form submission */}
                
            </Box>



        </div>
    );
}