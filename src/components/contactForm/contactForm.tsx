import * as React from 'react';
import Typography from '@mui/material/Typography';
import {AppBar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import { TextField } from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px"
  },
  row: {
    padding: "10px"
  },
  container: {
    padding: "10px"
  }
}));

export default function Contact() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   
    const handleSubmit = () => {
        //submit the form
    };
   
    return (
      <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#ffffff' }}>
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom color="common.black" > 
          Contact Me
        </Typography>
        <form noValidate autoComplete="off" className={classes.container}>
          <div className={classes.row}>
            <TextField label="Full Name" margin="normal" variant="outlined" value={name} onChange={e => setName(e.target.value)} fullWidth />
            <TextField label="Company Email Address" margin="normal" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
          </div>
          <TextField multiline rows="4" label="Message" margin="normal" variant="outlined" value={message} onChange={e => setMessage(e.target.value)} fullWidth />
          <br />
          <Button style={{ background: '#008ae6' }} fullWidth variant="contained" color="secondary" onClick={handleSubmit} > Submit </Button>
        </form>
      </div>
      </AppBar>
    </Box>
    );
  }