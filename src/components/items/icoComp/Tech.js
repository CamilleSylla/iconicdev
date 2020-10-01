import React from 'react';


//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


//assets
//logos
import Html from '../../../assets/img/Icons/Html.svg';
import Css from '../../../assets/img/Icons/Css.svg';
import ReactJS from '../../../assets/img/Icons/ReactJS.svg';
import Node from '../../../assets/img/Node.svg';
import JS from '../../../assets/img/Icons/JS.svg';
import Pgsql from '../../../assets/img/Icons/Pgsql.svg';
import WP from '../../../assets/img/Icons/WP.svg';
import VBA from '../../../assets/img/Icons/VBA.svg';
import Adobe from '../../../assets/img/Icons/Adobe.svg';
import Github from '../../../assets/img/github.svg';

// animations
import Fade from 'react-reveal/Fade';


const useStyles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    color: 'white'
  },

  items2: {
    background: 'rgba(166, 18, 126, 0.2)'
  },
  items: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: 10,
    gridAutoRows: 'minmax(auto, auto)',
    color: 'white',
    fontSize: 50,
    background: 'rgba(166, 18, 126, 0.5)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: 'minmax(100px, auto)',
  },
  },
  html: {
    width: '100%',
    gridColumn: 2,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 1,
      width: '100%',
  },
  },
  css: {
    width: '100%',
    gridColumn: 3,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 2,
      gridRow: 1,
      width: '100%',
  },
  },
  reactjs: {
    width: '100%',
    gridColumn: 4,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 3,
      gridRow: 1,
      width: '100%',
  },
  },
  node: {
    height: '200%',
    gridColumn: 5,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 4,
      gridRow: 1,
      width: '100%',
  },
  },
  js: {
    width: '100%',
    gridColumn: 6,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 2,
      width: '100%',
  },
  },
  pgsql: {
    width: '100%',
    gridColumn: 7,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 2,
      gridRow: 2,
      width: '100%',
  },
  },
  wp: {
    width: '100%',
    gridColumn: 8,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 3,
      gridRow: 2,
      width: '100%',
  },
  },
  vba: {
    width: '100%',
    gridColumn: 9,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 4,
      gridRow: 2,
      width: '100%',
  },
  },
  adobe: {
    width: '100%',
    gridColumn: 10,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 2,
      gridRow: 3,
      width: '100%',
  },
  },
  git: {
    width: '100%',
    gridColumn: 11,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 3,
      gridRow: 3,
      width: '100%',
  },
  },
  title: {
    letterSpacing:' 0.2em',
    fontSize: 30,
    textTransform: 'uppercase',
    textAlign: 'left',
    WebkitTextFillColor: 'white',
    WebkitTextStroke: '1px',
    WebkitTextStrokeColor: 'white',
    textShadow: '7px 7px #ff1f8f, 14px 14px #21254F;',
    webkitTransition: 'all 0.5s ease',
    mozTransition: 'all 0.5s ease',
    oTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease',
    '&:hover': {
        WebkitTextFillColor: 'transparent',
        textShadow: '-20px -20px #A6127E, 20px 20px #21254F;',
        letterSpacing:' 0.5em',
      },
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        WebkitTextStroke: '2px',
        textShadow: '0px 7px #ff1f8f, 0px 14px #21254F;',
        '&:hover': {
            textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
          },
    },  
}
}
);

class Tech extends React.Component {

  render() {

    const { classes } = this.props

    return (
      <Grid className={classes.root} container justify="center">
        <Grid className={classes.items2} container justify="center">
          <p className={classes.title}>
            Quelques technologies utilisée
                    </p>
        </Grid>
        <Grid className={classes.items}>
          <Fade delay={800}>
            <div className={classes.html}>
              <img className='imgLogo' src={Html} alt='' />
            </div>
          </Fade>
          <Fade delay={1000}>
            <div className={classes.css}>
              <img className='imgLogo' src={Css} alt='' />
            </div>
          </Fade>
          <Fade delay={1200}>
            <div className={classes.reactjs}>
              <img className='imgLogo' src={ReactJS} alt='' />
            </div>
          </Fade>
          <Fade delay={1400}>
            <div className={classes.node}>
              <img className='imgLogo' src={Node} alt='' />
            </div>
          </Fade>
          <Fade delay={1600}>
            <div className={classes.js}>
              <img className='imgLogo' src={JS} alt='' />
            </div>
          </Fade>
          <Fade delay={1800}>
            <div className={classes.pgsql}>
              <img className='imgLogo' src={Pgsql} alt='' />
            </div>
          </Fade>
          <Fade delay={2000}>
            <div className={classes.wp}>
              <img className='imgLogo' src={WP} alt='' />
            </div>
          </Fade>
          <Fade delay={2200}>
            <div className={classes.vba}>
              <img className='imgLogo' src={VBA} alt='' />
            </div>
          </Fade>
          <Fade delay={2400}>
            <div className={classes.adobe}>
              <img className='imgLogo' src={Adobe} alt='' />
            </div>
          </Fade>
          <Fade delay={2600}>
            <div className={classes.git}>
              <img className='imgLogo' src={Github} alt='' />
            </div>
          </Fade>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(useStyles)(Tech)