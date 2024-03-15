import React from 'react'
import workingCats1 from '../../assets/images/workingCats1.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'
import Box from '@mui/material/Box';

export default function ErrorPage({error}) {
return (
    <div>
        <Header />
        <div className="musician-bio">
        <Box
            width={300}
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
            <h2>Error: {error}</h2>
            <img className='error-image' src={workingCats1} alt="ErrorImage"/>
            <p>Oops! Something went wrong!</p>

        </Box>
        </div>
        <Footer />
    </div>
    );
}
