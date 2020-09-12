import React from 'react';
import './App.css';
//component
import Main from './components/Home/Home';


//material UI
import { makeStyles } from '@material-ui/core/styles';


//bg animation
import Particles from 'react-particles-js';

//assets
import HTB from './assets/img/HTB.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    backgroundImage: `url(${HTB})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  layer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(56, 49, 91, 0.9)',
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
    <div className={classes.root}>
      <div className={classes.layer}>
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
      <Main/>
      </div>
     
    </div>
  );
}

export default App;
