import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";
import './style.css'
import { GET_MUSICIANS_BY_LOCATION } from "../../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Button } from "@mui/material";
import ResultsList from "../../components/ResultsList";
import StateDropdown from "./components/StateDropdown";

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

    const [city, setCityData] = useState('');
    const [state, setState] = useState('');
    const [responseData, setResponseData] = useState('');

    const [getMusicians, { data, loading }] = useLazyQuery(GET_MUSICIANS_BY_LOCATION);


    const handleDropdownChange = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(!city || !state) {
            alert("Must provide city and state");
            return;
        }

        console.log(city);
        console.log(state);

        const { data } = await getMusicians({variables: {
            city: city,
            state: state
        }});

        console.log(data.musiciansByLocation);

        if(data) {
            setResponseData(data.musiciansByLocation);
        }

    };

    const handleInputChange = async (e) => {
        // console.log(e.target.value);
        const { value } = e.target;
        console.log(value);
        setCityData(value);
    }


    return (
        <div>
            <Header>
            </Header>

            <div className="search">
                <p className="search-header">Find your Gig!</p>
                <div className="search-bar">
                    <label for="site-search"></label>
                    <input type="search" id="site-search" name="q" placeholder="City" onChange={handleInputChange} />
                    <StateDropdown onChange={handleDropdownChange} />
                </div>
                <Button variant='contained' className="search-button" onClick={handleFormSubmit}>Search</Button>

            </div>

            {responseData ? 
            <div>
                <ResultsList results={responseData} />
            </div>
            :
            <></>}
            <div>
                <Footer>
                </Footer>
            </div>
        </div >
    )
}

