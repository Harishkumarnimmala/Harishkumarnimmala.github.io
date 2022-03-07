import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';


const MyProjects: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
    }, [props.name])

    
    return (
    <div>
        <h1>My Projects</h1>
        
        <Button style={{ background: '#008ae6' }} variant="contained" color="primary" component={Link} to="/">Back</Button>
    </div>
    );
}

export default MyProjects;