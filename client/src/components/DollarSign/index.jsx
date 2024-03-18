import React from 'react'
import DollarImage from '../../assets/images/dollar-sign.png';
export default function DollarSign({cost}) {

    if (cost <= 200) {
        return <img  className='dollar-sign' src={DollarImage}/>;

    } else if (cost <= 1000) {
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
