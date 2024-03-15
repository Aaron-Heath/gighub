import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";
import './style.css'
import { GET_MUSICIANS_BY_LOCATION } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import ResultsList from "../../components/ResultsList";

export default function Search() {
    storePage();

    // Search types
    const searchOptions = [
        'Musician', 'Tag', 'Location'
    ];
    const defaultSearchOption = "Filter Search by";

    // For searching by location
    const stateOptions = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    const defaultStateOption = "State";

    
    // const [selectedTags, setSelectedTags] = useState([]);

    // const handleSearchClick = (e) => {
    //     const clickedTag = e.value;
    //     if (selectedTags.length && !selectedTags.includes(clickedTag)) {
    //         const updatedTags = [...selectedTags, clickedTag];
    //         setSelectedTags(updatedTags);
    //     }
    // };

    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState('');
    const [locationSearchBtn, setLocationSearchBtn] = useState(false);
    const [state, setState] = useState('');

    const handleDropdownChange = (selectedOption) => {
        const { value } = selectedOption
        console.log(value)

        if (value === 'Location') {
            setSearch(value);
        } else {
            setState(value)
            console.log(state)
        }
    }


    const { data, loading } = useQuery(GET_MUSICIANS_BY_LOCATION,
        {
            variables: { city: searchData, state: state },
            skip: !locationSearchBtn
        })

    console.log(data)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        console.log(search)
        console.log(searchData)
        console.log(state)

        if (search === 'Location') {
            const location = { searchData, state}
            console.log(location)
            setLocationSearchBtn(true);
        }
    };

    const handleInputChange = async (e) => {
        const { value } = e.target;
        setSearchData(value);
    }

    if (data && !loading ) {
        console.log(data)
    }


    return (


        <div>
            <Header>
            </Header>

            <div className="search">
                <p className="search-header">Find your Gig!</p>
                <label for="site-search"></label>
                <input type="search" id="site-search" name="q" onChange={handleInputChange} />
                <Button variant='contained' className="search-button" onClick={handleFormSubmit}>Search</Button>

                
                {/* If searching by location, creates a dropdown of states */}
                {search === 'Location' && (
                    <Dropdown 
                    controlClassName="dropdown" 
                    menuClassName="dropdown" 
                    options={stateOptions} 
                    value={defaultStateOption} 
                    placeholder="Select an option" 
                    name='state'
                    onChange={handleDropdownChange}
                     />

                )}

                {/* Search type dropdown */}
                <Dropdown
                    controlClassName="dropdown"
                    menuClassName="dropdown"
                    options={searchOptions}
                    value={defaultSearchOption}
                    placeholder="Select a Filter"
                    onChange={handleDropdownChange}
                    name='searchType'
                />
            </div>

            {data && !loading && (
                <div>
                    <ResultsList results={data.musiciansByLocation} />
                    </div>

                
            )}
            <div>
                <Footer>
                </Footer>
            </div>
        </div >
    )
}

