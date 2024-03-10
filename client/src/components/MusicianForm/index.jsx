
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
                    <TextField id="outlined-basic" label="Stage Name" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="Public Email" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="City" variant="outlined" margin="dense" />
                    <TextField id="outlined-basic" label="State" variant="outlined" margin="dense" />
                    <p>*This will be shown on your profile</p>
                    </div>
                </Box>
            </div>
        </div>
    )
}