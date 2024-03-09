import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import gighubLogo from "../../assets/images/Gighub-290px.png";
import "./style.css";




export default function SignupPage() {


// Code to handle radio color
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
  
//------------------------------------

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
                    <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />
                    <div className='radio-container'>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Are you a musician?</FormLabel>
                            <RadioGroup
                                
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="No"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Yes" control={<Radio {...controlProps('Yes')} color="default" />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio {...controlProps('No')} color="default"/>} label="No" />

                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Button variant="outlined" id="signupBtn">Submit</Button>
            </Box>

        </div>
    )
}