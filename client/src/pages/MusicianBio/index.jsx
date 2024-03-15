import React, { useState, useEffect } from "react";
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
import Auth from "../../utils/auth"
import './style.css'
import ErrorPage from "../ErrorPage";


const MusicianBio = () => {

  storePage();

  const { musicianId } = useParams();

  // query Musician ID
  const { loading, data } = useQuery(
    GET_MUSICIAN_BY_ID,
    {
      variables: { musicianId: musicianId }
    });


  console.log(data);
  const musicianData = data ? data.musicianById : null;

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
  } else if (!musicianData) {
    return <ErrorPage error="404"/>
  }

  return (
    <div>
      <Header />
      <div className="musician-bio">
        <Box>    
          <img src={musicianData.imageLink} alt="Musician" />
            <h2 style={styles.stageName}>{musicianData.stageName}</h2>
            <ul>
              <li>{`${musicianData.city}, ${musicianData.state}`}</li>
              <li>{musicianData.minCost}</li>
            </ul>
            {/* <Button variant="outlined" size='small' id="tagsBtn">{musicianData.tags}</Button> */}
            <Divider orientation="horizontal" flexItem />
            <p>{musicianData.description}</p>
            <Button
              onClick={() => {
                alert('You need to login to contact this musician');
              }}
              variant="outlined"
              id="loginBtn"
            >
              Login to Contact
            </Button>
        </Box>
      </div>
      <Footer />
    </div>
  );
};


export default MusicianBio;
