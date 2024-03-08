import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// import { useParams } from 'react-router-dom';


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

  useEffect(() => {
    const response = { user: 'John Doe', stageName: 'The DoodleBobs', city: 'City', state: 'State', minCost: 'minCost', imageLink: 'string', description: 'string', tags: 'tags' }; 

    // const fetchMusicianData = async () => {
    //     try {
    //       const response = await fetch('/api/musician', {
    //         method: 'GET',
    //         // You can include headers if needed, such as authorization headers
    //       });
    //       const data = await response.json();
    //       setMusicianData(data);
    //     } catch (error) {
    //       console.error('Error fetching musician data:', error);
    //     }
    //   };

    
    setMusicianData(response); // Replace with actual response data
        const fetchMusicianData = async () => {
            try {
                // const response = await fetch('/api/musician'); // Replace with the actual API endpoint
                const data = await response.json();
                setMusicianData(data);
            } catch (error) {
                console.error('Error fetching musician data:', error);
            }
        };

        fetchMusicianData();

  }, []);

  return (
    <div>
      <div className="musician-bio">
        <Box
          sx={{
            flexGrow: 1,
            alignContent: 'center',
          }}
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