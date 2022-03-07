import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
          Made with Love. Made with React &copy; Copyright 2022 | Harish Kumar Nimmala | All Rights Reserved
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}