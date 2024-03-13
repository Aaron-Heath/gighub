import { useState } from "react";
import Dropdown from 'react-dropdown';
import Stack from '@mui/material/Stack';
import { Box, TextField, Button } from '@mui/material';
import { useQuery } from "@apollo/client";
import { GET_TAGS } from "../../utils/queries";
import SettingsChips from "../SettingsChips";



import "./style.css";


export default function SettingsForm() {

    // Code for the populating the dropdown and handling the click event
    // Users should be able to pick 3 tags and they will be added to an array
    const [selectedTags, setSelectedTags] = useState([]);
    const defaultOption = "Pick up to 3 tags";

    const { loading, data } = useQuery(GET_TAGS);
    const tagArray = data ? data.tags.map(tag => tag.tag) : [];

    const handleTagClick = (e) => {
        const clickedTag = e.value;

        if (selectedTags.length < 3 && !selectedTags.includes(clickedTag)) {
            const updatedTags = [...selectedTags, clickedTag];
            setSelectedTags(updatedTags);
        }
    };

    console.log(tagArray)
    console.log(selectedTags)

    // --------------------------------------------------------------------------

    // Need code for adding selectedTags to musician bio


    // Return statement

    // Need code for regular user settings

    
    return (
        <div>
            <Box
                className="settings-container"
                gap={4}
                sx={{
                    border: '4px solid #FFE5A1',
                    borderRadius: 2,
                    flexGrow: 1,
                    alignContent: "center",
                    marginTop: '10px'
                }}
                component="form"
                noValidate
                autoComplete="off"
            >
 
            {/* Forms for users to fill out */}
                <TextField className="form" id="stageName" label=" Stage Name" variant="outlined" style={{ backgroundColor: "var(--dark-red)", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px', marginTop: "20px" }} />


                <TextField className="form" id="publicEmail" label=" Email" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px' }} />


                <TextField className="form" id="city" label="City" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px' }} />

                <TextField className="form" id="state" label="State" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px' }} />

                <TextField className="form" id="imageLink" label="Image Link" variant="outlined" style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px' }} />

                <TextField
                    className="form"
                    id="description"
                    label=" Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ backgroundColor: "#711F31", color: "#FFE5A1", border: '2px solid #FFE5A1', borderRadius: '10px', width: '80%', marginBottom: '10px' }}
                />
            {/* Where chips will appear after user chooses them */}
                <Stack className="chip-container" direction="row" spacing={1}>
                    <SettingsChips selectedTags={selectedTags} />
                </Stack>
            {/* Dropdown that users use to pick 3 tags */}
                <Dropdown
                    controlClassName="dropdown"
                    menuClassName="dropdown"
                    options={tagArray}
                    value={defaultOption}
                    placeholder="Select an option"
                    onChange={handleTagClick}
                />

            {/* Save button */}
                <div className='save-button'>
                    <Button variant="contained" style={{ backgroundColor: "#711F31", color: "#FFE5A1", borderRadius: '10px', marginTop: '50px', marginBottom: '50px' }}>
                        Save Changes
                    </Button>
                </div>
            </Box>


        </div>
    );
}



























