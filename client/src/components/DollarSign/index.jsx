import React from 'react'
import DollarImage from '../../assets/images/dollar-sign.png';
export default function DollarSign({cost}) {
   
    

// const cost = 550;

if (cost <= 200) {
    return <img  className='dollar-sign' src={DollarImage}/>;

} else if (cost > 200 && cost <= 500) {
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
