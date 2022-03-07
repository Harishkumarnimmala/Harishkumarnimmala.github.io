import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';
import SkillBar from 'react-skillbars';

const Programming_skills = [
    {type: "Python", level: 90},
    {type: "EmbeddedC", level: 65},
    {type: "C ++", level: 60},
    {type: "Typescript", level: 70},
    {type: "Dart", level: 50}
];

const Skills_frontend = [
    {type: "React", level: 75},
    {type: "Flutter", level: 50}
];

const Skills_backend = [
    {type: "AWS_Amplify", level: 75},
    {type: "AWS_Lambda", level: 80},
    {type: "API_Gateway", level: 80},
    {type: "AWS_IAM", level: 80},
    {type: "AWS_EC2", level: 65},
    {type: "AWS_IOT", level: 80},
];

const DataBases = [
    {type: "DynamoDB", level: 80},
    {type: "S3_Bucket", level: 65}
];

const HardwareSkills = [
    {type: "Jetson_Nano", level: 80},
    {type: "Raspberry_Pi", level: 85},
    {type: "Arduino", level: 75}
];

const IOTSkills = [
    {type: "Sigfox", level: 60},
    {type: "LoraWAN", level: 55},
    {type: "BLE", level: 75},
    {type: "WIFI", level: 80},
    {type: "LTE", level: 62},
    {type: "RestAPI", level: 70},
    {type: "Websockets", level: 70},
    {type: "Mqtt", level: 80},
    {type: "CAN", level: 68},
    {type: "I2C", level: 70},

];

const colors = {
    bar: '#00ccff',
    title: {
      text: '#000000',
      background: '#fff'
    }
}



const MySkills: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
    }, [props.name])

    
    return (
    <div>
        <h1>My Skills</h1>
        <h4>I Love to Learn new Tech/Programming Languages. Below are few skills which i use more often.</h4>
        <div className='skillsHeading'><h2>Programming Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={Programming_skills} colors={colors}/></div>
        <div className='skillsHeading'><h2>Hardware Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={HardwareSkills} colors={colors}/></div>
        <div className='skillsHeading'><h2>IOT Communication Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={IOTSkills} colors={colors}/></div>
        <div className='skillsHeading'><h2>Frontend Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={Skills_frontend} colors={colors}/></div>
        <div className='skillsHeading'><h2>Backend Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={Skills_backend} colors={colors}/></div>
        <div className='skillsHeading'><h2>Database Skills</h2></div>
        <div className='skillsHeading'><SkillBar skills={DataBases} colors={colors}/></div>
        <Button style={{ background: '#008ae6' }} variant="contained" color="primary" component={Link} to="/">Back</Button>
    </div>
    );
}

export default MySkills;