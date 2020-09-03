import React from 'react';
import './App.css';
//component
import Home from './components/Home/Home';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//bg animation
import Particles from 'react-particles-js';
//assets
import ID from "./assets/img/ID.png";
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: "block",
    textAlign: 'center'
  },
  imgdim: {
    width: "33%",
  },
  btn: {
    marginTop: 100,
    backgroundColor: '#080C59',
    color: '#A6127E',
    '&:hover': {
      backgroundColor: '#A6127E',
      color: '#080C59',
    }
  },
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Particles className="particles"
        params={{ 
          "particles": { 
            "color": 
              {"value": ["#A6127E","#080C59"]},
            "number": { 
              "value": 50, 
              "density": { 
                "enable": true, 
                "value_area": 1000, 
              },
            },
            "line_linked": {
              "enable": false,
            },
            "size" : {
              "value": 5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 30,
              }
            },

          },
          "interactivity": {
            "detect_on": "canva",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              },
              "modes": {
                "bubble": {
                    "distance": 150,
                    "size": 30,
                    "duration": 2,
                    "opacity": 1,
                    "speed": 3
                },
              }
          } 
        } 
      }
      />
      
      <Grid container justify="center" className={classes.root}>
        <Box display="flex" justifyContent="center" m={1} p={1} >
        <Box className={classes.imgdim}>
        <img className="imglog" src={ID} alt="logo"/>
        </Box>
      </Box>
        <Grid>
          <p>La solution pour vos projets web</p>
        </Grid>
        <Grid>
          <IconButton className={classes.btn} aria-label="delete">
            <ArrowForwardIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      
     
    </div>
  );
}

export default App;
