import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//component
import Iconic from './items/iconic'

//animation
import Fade from 'react-reveal/Fade'
import Tilt from'react-tilt';
import Reveal from 'react-reveal/Reveal';
import Typing from 'react-typing-animation';


//assets
import ID from '../assets/img/ID.png';

const useStyles = theme => ({
    root: {
      width: '100%',
      display: "block",
      textAlign: 'center'
    },
    navCol:{
        background: 'linear-gradient(339deg, rgba(166,18,126,0.7) 0%, rgba(8,12,89,0.7) 100%)',
        opacity: 0.5,
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            opacity: 1
          }
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        borderBottomStyle: 'solid',
        borderBottomColor: '#A6127E',
        
    },
    imgNav: {
        width: '10%',
      },
      navLink:{
        display: 'inline-flex',
      },
      navBox:{
        marginRight: 100
      },
    imgdim: {
      width: "25%",
    },
    navItem: {
        color: '#A6127E',
        marginRight: 15,
        marginLeft: 15,
        padding: 20,
        textAlign: 'center',
        marginBottom: 20,
        '&:hover': {
            color: '#080C59'
          }
    }
    }
  );

class Landing extends React.Component {

    render () {
        const {classes} = this.props
        return (
            <Fade right>
                <Grid container justify="center" className={classes.root}>
                        <header className={classes.navCol}>
                            <div className={classes.header}>
                                <img className={classes.imgNav} src={ID} alt='IconicDev'/>
                                <nav>
                                        <Grid className={classes.navLink}>
                                            <Box className={classes.navBox}>
                                                <Typography>
                                                    IconicDev
                                                </Typography>
                                            </Box>
                                            <Box className={classes.navBox}>
                                                <Typography>
                                                    Services
                                                </Typography>
                                            </Box>
                                            <Box className={classes.navBox}>
                                                <Typography>
                                                    Portfolio
                                                </Typography>
                                            </Box>
                                            
                                        </Grid>
                                </nav>
                                <Typography>Contact</Typography>
                            </div>
                                
                        </header>
                    <Grid>
                        <Box display="flex" justifyContent="center" m={1} p={1} >
                            <Box className={classes.imgdim}>
                                <Tilt className="Tilt br2" options={{ max : 100 }} >
                                    <img className="imglog" src={ID} alt="logo"/>
                                </Tilt>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid>
                        <Iconic/>
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(Landing);