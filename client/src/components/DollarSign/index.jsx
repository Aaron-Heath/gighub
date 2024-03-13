import React from 'react'
import DollarImage from '../../assets/images/dollar-sign.png';
export default function DollarSign(props) {
   
    const cost = 1
    switch (cost) {
        case (cost > 500): 
        return(
        <>
        <img src={DollarImage}/>
        <img src={DollarImage}/>
        </>
        ) 

        default:
        return(<img src={DollarImage}/>)
    }
   
}
