import React from 'react';

// Rooter
import { Link } from 'react-router-dom';

//material ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';

//assets
import ID from "../../assets/img/Idsvg.svg";

//animation
import Tilt from 'react-tilt';
import anime from 'animejs/lib/anime.es.js';


const useStyles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    display: "block",
    textAlign: 'center',
    overflow: 'hidden'

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
  slogan: {
    letterSpacing: ' 0.1em',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#21254F',
    WebkitTextStroke: '2px',
    WebkitTextStrokeColor: '#21254F',
    webkitTransition: 'all 0.5s ease',
    mozTransition: 'all 0.5s ease',
    oTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease',
    '&:hover': {
      textShadow: '-20px -20px white, 20px 20px #A6127E;',
      letterSpacing: ' 0.8em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
      WebkitTextStroke: '2px',
      '&:hover': {
        textShadow: '0px -20px white, 0px 20px #A6127E;',
      },
    },
  },

});
class Welcome extends React.Component {

  componentDidMount() {
    anime({
      targets: '.logo',
      scaleX: [
        {
          value: 0,
          duration: 0,
          easing: 'easeInOutBack'
        }, {
          value: 1.5,
          duration: 800,
          easing: 'easeInOutBack'
        },
        {
          value: 0.5,
          duration: 500,
          easing: 'easeInOutBack'
        }, {
          value: 1,
          duration: 1600,
          easing: 'easeInOutBack'
        },],
      scaleY: [
        {
          value: 0,
          duration: 0,
          easing: 'easeInOutBack'
        }, {
          value: 1.5,
          duration: 800,
          easing: 'easeInOutBack'
        },
        {
          value: 0.5,
          duration: 500,
          easing: 'easeInOutBack'
        }, {
          value: 1,
          duration: 1600,
          easing: 'easeInOutBack'
        },],
      rotateX: '360',
      rotateY: '360',
      easing: 'easeInOutBack',
      delay: 500
    });

    anime({
      targets: '.sloAnim',
      scale: [0, 1],
      duration: 800,
      easing: 'easeInOutSine',
      delay: 2200
    });

    anime({
      targets: '.btnConAnim',
      scale: [0, 1],
      duration: 800,
      easing: 'easeInOutSine',
      delay: 2200
    });
    
    anime({
      targets: '.arrow',
      scale: [0, 1],
      translateX: [-800, 0],
      duration: 1800,
      easing: 'easeInOutSine',
      delay: 2600
    });
  }
  render() {

    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" className={classes.root}>

          <Box display="flex" justifyContent="center" m={1} p={1} >
            <Box className={classes.imgdim}>
              <img src={ID} className="logo" />
            </Box>
          </Box>
          <Grid>
            <div className="sloAnim">
              <p className={classes.slogan}>make you bigger</p>
            </div>
          </Grid>
          <Grid>
            <Link to='/IconicDev'>
              <div className="btnConAnim">
                <IconButton className={classes.btn} aria-label="delete">
                  <ArrowForwardIcon className="arrow" />
                </IconButton>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(Welcome);