import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

//animation
import Fade from 'react-reveal/Fade'
import Tilt from'react-tilt';
import Reveal from 'react-reveal/Reveal';


//assets
import ID from '../assets/img/ID.png';

const useStyles = theme => ({
    root: {
      width: '100%',
      display: "block",
      textAlign: 'center'
    },
    imgdim: {
      width: "25%",
    },
    navBar: {
      display: 'inline-flex',
      borderBottomStyle: 'solid',
      borderBottomColor: '#A6127E',
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
                    <Grid>
                        <Box display="flex" justifyContent="center" m={1} p={1} >
                            <Box className={classes.imgdim}>
                                <Tilt className="Tilt br2" options={{ max : 100 }} >
                                    <img className="imglog" src={ID} alt="logo"/>
                                </Tilt>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className={classes.navBar}>
                        <Fade cascade delay={800}>
                            <Typography className={classes.navItem}>
                                IconicDev
                            </Typography>
                        </Fade>
                        <Fade cascade delay={900}>
                            <Typography className={classes.navItem}>
                                Site Internet
                            </Typography>
                        </Fade>
                        <Fade cascade delay={1000}>
                            <Typography className={classes.navItem}>
                                Creation Graphique
                            </Typography>
                        </Fade>
                        <Fade cascade delay={1100}>
                            <Typography className={classes.navItem}>
                                Support Bureautique VBA/Excel
                            </Typography>
                        </Fade>
                        
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(Landing);