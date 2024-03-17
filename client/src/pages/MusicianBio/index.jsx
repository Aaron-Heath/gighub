import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { storePage } from "../../utils/pages";
import { useParams } from 'react-router-dom';
import{ GET_MUSICIAN_BY_ID} from '../../utils/queries' 
import { useQuery } from '@apollo/client';
// import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import DollarSign from "../../components/DollarSign";
import Chip from '@mui/material/Chip';
import Auth from "../../utils/auth"

import './style.css'

const MusicianBio = () => {

  storePage();

// Retrieving musician data
  const { musicianId } = useParams();

  console.log(musicianId);

  // query Musician ID
  const { loading, data } = useQuery(
    GET_MUSICIAN_BY_ID,
    {
      variables: { musicianId: musicianId }
    });


  console.log(data);
  const musicianData = data ? data.musicianById : null;

  console.log(musicianData)
// ------------------------------------------------------

  const styles = {
    stageName: {
      lineHeight: "30px"
    }
  }
  if(loading) {
    return (
      <div>
        <Header />
        <div className="musician-bio">
          <Box
              height={300}
              width={300}
              my={4}
              gap={2}
              borderRadius={10}
              p={5}
              sx={{ 
                border: '4px solid #FBF4E6' ,
                flexGrow: 1,
                alignContent: 'center',}}
          
            component="form"
            noValidate
            autoComplete="off"
          >
            <h2 style={styles.stageName}>Loading</h2>

          </Box>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="musician-bio">
        <Box>    
          <img src={musicianData.imageLink} alt="Musician" />
            <h2 style={styles.stageName}>{musicianData.stageName}</h2>
            <h3>{`${musicianData.city}, ${musicianData.state}`}</h3>
            <div className="dollar">
              <DollarSign cost={musicianData.minCost}/>
            </div>
            <Chip className="chip" label={musicianData.tags[0].tag} />
            <Divider orientation="horizontal" flexItem />
            <p>{musicianData.description}</p>
            
            {Auth.loggedIn() ? (
              <div>
                <h3>{`Contact ${musicianData.stageName} at ${musicianData.publicEmail}`}</h3>
              </div>
            
            ) : (

              <div>
              <Link to="/login">
                <Button
                  variant="outlined"
                  id="loginBtn"
                >
                Login to Contact
                </Button>
              </Link>
            </div>

            )}

            
            
        
            </Box>
      </div>
      <Footer />
    </div>
  );
};


export default MusicianBio;
