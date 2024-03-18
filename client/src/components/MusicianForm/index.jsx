
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';
import StateDropdown from '../../pages/Search/components/StateDropdown';


// Props given for update functionality
export default function MusicianForm({ stageName, publicEmail, city}) {

    
    
    // State dropdown styling
    const style = {
        "backgroundColor": "white",
        "color":"black",
        "fontWeight": "normal",
        "width": "70%",
        "border": "1px grey solid",
        "borderRadius": "4px"
    }

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
                        <TextField id="stageName" className="outlined-basic" label="Stage Name" variant="outlined" margin="dense" value={stageName} name='stageName'/>
                        <TextField id="publicEmail" className="outlined-basic" label="Public Email" variant="outlined" margin="dense" value={publicEmail} name='publicEmail'/>
                        <TextField id="city" className="outlined-basic" label="City" variant="outlined" margin="dense" value={city} name='city'/>
                        <StateDropdown style={style}/>
                        {/* <Dropdown onChange={handleClick} id="state" controlClassName="dropdown" menuClassName="dropdown" options={options} value={defaultOption} placeholder="Select an option" name='state'/> */}
                        <p>*This will be shown on your profile</p>
                    </div>
                </Box>
            </div>
        </div>
    )
}
