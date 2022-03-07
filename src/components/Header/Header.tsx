import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#ffffff' }}>
        <Toolbar>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}  variant="outlined" onClick={e => window.location.href='/'}>Harish Kumar Nimmala</Button></Stack>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
            <div className='portfolioH'><p>Portfolio</p></div>
          </Typography>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}   variant="outlined" onClick={e => window.location.href='/'}>Home</Button></Stack>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}   variant="outlined" onClick={e => window.location.href='/aboutMe'}>About Me</Button></Stack>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}   variant="outlined" onClick={e => window.location.href='/skills'}>Skills</Button></Stack>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}   variant="outlined" onClick={e => window.location.href='/projects'}>Projects</Button></Stack>
          <Stack direction="row" spacing={2}><Button style={{ background: '#ffffff', color: '#000000' }}   variant="outlined" onClick={e => window.location.href='/contact'}>Contact</Button></Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
