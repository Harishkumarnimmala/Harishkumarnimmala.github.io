import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';


const MyContact: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
    }, [props.name])

    
    return (
    <div>
        <h1>Contact Me</h1>
        <h4>I Love to Learn new Tech/Programming Languages. Below are few skills which i use more often.</h4>
        <div className='skillsHeading'><h2>Email:</h2></div>
        <div className='skillsHeading'><h3>You can contact me at this email address: Harishkumar.nimmala@gmail.com </h3></div>
        <div className='skillsHeading'><h2>Phone:</h2></div>
        <div className='skillsHeading'><h3>(+49)-17630158858</h3></div>
        <Button style={{ background: '#008ae6' }} variant="contained" color="primary" component={Link} to="/">Back</Button>
    </div>
    );
}

export default MyContact;