import { storePage } from "../../utils/pages"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
// import gighubLogo from "../../assets/images/Gighub-290px.png";
import './style.css';
import { settingVariants } from "./indexVariants";
import { motion } from 'framer-motion'
import SettingsForm from "../../components/SettingsForm";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import { GET_TAGS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function AccountSettings() {
    storePage();



    return (
        <div>
            <Header />
            {/* {loading ? (<p>loading</p>) : ( */}
            <div>

                {/* <img src={gighubLogo} alt="Logo" /> */}
                <Box
                    className="settings-container"
                    gap={4}
                    sx={{
                        // border: '4px solid #FFE5A1',
                        borderRadius: 2,
                        flexGrow: 1,
                        alignContent: "center",
                        marginTop: '10px'
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >

                    <motion.div
                        className="settings"
                        variants={settingVariants}
                        //   initial="animate"
                        animate='animate'
                        whileHover='whileHover'
                        style={{ marginTop: '30px', color: 'white' }}
                    >
                        Settings
                    </motion.div>
                    <SettingsForm />
                </Box>
            </div>
            {/* )} */}
        </div>
    );
}

