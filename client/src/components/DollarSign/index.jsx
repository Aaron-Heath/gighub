import React from 'react'
import DollarImage from '../../assets/images/dollar-sign.png';
export default function DollarSign(props) {
   
    

const cost = 550;

if (cost < 200) {
    return <img  className='dollar-sign' src={DollarImage}/>;
} else if (cost < 500) {
    return (
        <>
            <img  className='dollar-sign' src={DollarImage}/>
            <img  className='dollar-sign' src={DollarImage}/>
        </>
    );
} else {
    return (
        <>
            <img  className='dollar-sign' src={DollarImage}/>
            <img  className='dollar-sign' src={DollarImage}/>
            <img className='dollar-sign' src={DollarImage}/>
        </>
    );
}


   
}
