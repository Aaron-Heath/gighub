import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { GET_MUSICIAN_BY_ID } from "../../utils/queries";
import { useQuery } from '@apollo/client'



const MusicianBio = () => {
  const [musicianData, setMusicianData] = useState({
    user: 'John Doe',
    stageName: 'The Doodlebobs',
    city: 'City',
    state: 'State',
    minCost: 'minCost',
    imageLink: 'string',
    description: 'string',
    tags: 'tags',
  });

  // useEffect(() => {
  //   const response = { user: 'John Doe', stageName: 'The DoodleBobs', city: 'City', state: 'State', minCost: 'minCost', imageLink: 'string', description: 'string', tags: 'tags' }; 

    // const { loading, data } = useQuery(GET_MUSICIAN_BY_ID)
    // {
    //   // variables: { id: musicianId },
    // }
  return (
    <div>
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
          
          <div className="musicianForm">
          <img src={musicianData.imageLink} alt="Musician" />
            <h2>{musicianData.stageName}</h2>
            <ul>
              <li>{`${musicianData.city}, ${musicianData.state}`}</li>
              <li>{musicianData.minCost}</li>
            </ul>
            <Button variant="outlined" size='small' id="tagsBtn">{musicianData.tags}</Button>
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
          </div>
        </Box>
      </div>
    </div>
  );
};


export default MusicianBio;
