import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import { Button } from '@material-ui/core';
import Nimmala from '../images/nimmalaProfile.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
    }, [props.name])

    return (
        <div className="row">
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box component="img" sx={{ bgcolor: '#cfe8fc', height: 350, width: 350, maxHeight: { xs: 350, md: 250 }, maxWidth: { xs: 350, md: 250 }}} borderRadius="50%" alt='' src={Nimmala} />
                </Container>
            </React.Fragment>   
            <Grid container justifyContent={'left'} spacing={0}>
                <Grid item xs={0}/>
                <Item><div className='Intro1'><p>Hello, I'm</p></div><div className='Intro2'><p>Harish Kumar Nimmala</p></div><div className='Intro3'><p>AI / IOT Developer | MLOPS Expert | Python</p></div><Button style={{ background: '##ffffff' }}  variant="outlined" onClick={e => window.location.href='https://www.linkedin.com/in/harish-kumar-nimmala-0b3b6a87/'}>Linkedin</Button><Button style={{ background: '##ffffff', margin: 5 }}  variant="outlined" onClick={e => window.location.href='/demonstrator'}>Github</Button><br/><Button style={{ background: '#00ccff', color: '#ffffff'}}  variant="outlined" onClick={e => window.location.href='/demonstrator'}>Hire me</Button><Button style={{ background: '#00ccff', margin: 5, color: '#ffffff'}}  variant="outlined" onClick={e => window.location.href='/demonstrator'}>view my Resume</Button></Item>
            </Grid>
        </div>
    );
}

export default HomePage;