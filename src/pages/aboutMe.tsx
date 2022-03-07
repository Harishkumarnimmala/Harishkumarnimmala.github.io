import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';


const AboutMe: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
    }, [props.name])

    return (
    <div>
        <h1>About Me</h1>
        <div className='aboutme'><p>I am a Software engineer with more than three years of experience in the field of AI and IOT. I am very enthusiastic about new technologies and developments. My interest towards new technologies made me to choose my master’s degree in Mechatronics and Cyber Physical Systems, which has a wide range of new technologies like Internet of Things, cyber physical systems, advanced robotics, autonomous systems, etc. The quest to learn more always made me to look out of class learning as a result I worked on different AI and IOT projects during my academics. My disciplined approach to work is my key strength which enables me to perform long research activities. As an example, during my Master Thesis at AVL Software and Functions GmbH, I invented a new product called Intelligent Smart Mover, which is a smart baby stroller integrated with different AI and IOT technologies. This invention has also been awarded as a best master thesis. I love programming. My journey started with blogging in the year 2016. As I am fascinated by artificial intelligence and internet of things, currently I am working as a Development engineer in the field of AI and IOT. My projects and GitHub profile would give you a glimpse of what I have been up to for the past few years.</p></div>
        <Button style={{ background: '#008ae6' }} variant="contained" color="primary" component={Link} to="/">Back</Button>
    </div>
    );
}

export default AboutMe;