
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';

export default function MusicianForm() {



    return (
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
                    <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" margin="dense" />
                    </div>
                </Box>
            </div>
        </div>
    )
}