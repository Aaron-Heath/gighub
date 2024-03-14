import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";
import './style.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DollarSign from "../../components/DollarSign";
import { GET_MUSICIANS_BY_LOCATION } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Button } from "@mui/material";

export default function Search() {
    storePage();

    const options = [
        'Musician', 'Tag', 'Location'
    ];

    // const [selectedTags, setSelectedTags] = useState([]);

    const defaultOption = "Filter Search by";
    // const handleSearchClick = (e) => {
    //     const clickedTag = e.value;
    //     if (selectedTags.length && !selectedTags.includes(clickedTag)) {
    //         const updatedTags = [...selectedTags, clickedTag];
    //         setSelectedTags(updatedTags);
    //     }
    // };

    const [search, setSearch] = useState('')
    const handleDropdownChange = (selectedOption) => {
        setSearch(selectedOption.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        console.log(search)

        if (search === 'Location') {
            const { loading, data } = useQuery(GET_MUSICIANS_BY_LOCATION, {
                variables: {}
            });
        }
    }

   

    return (


        <div>
            <Header>
            </Header>

            <div className="search">
                <p className="search-header">Find your Gig!</p>
                <label for="site-search"></label>
                <input type="search" id="site-search" name="q" />
                <Button variant='contained' className="search-button" onClick={handleFormSubmit}>Search</Button>


                <Dropdown
                    controlClassName="dropdown"
                    menuClassName="dropdown"
                    options={options}
                    value={defaultOption}
                    placeholder="Select a Filter"
                    onChange={handleDropdownChange}
                />
            </div>

            <List className="result-list"
                sx={{
                    width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid',
                    borderColor: 'divider'
                }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Result 1" secondary="Genre" />
                    </ListItemButton>
                    <DollarSign/>
                   </ListItem>
                <Divider component="li" />

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Result 2" secondary="Genre"/>
                    </ListItemButton>
                    <DollarSign/>
                </ListItem>

                <Divider component="li" />
            </List>



            <div>
                <Footer>
                </Footer>
            </div>
        </div >
    )
}

