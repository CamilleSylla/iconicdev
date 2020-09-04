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
    btn: {
      marginTop: 100,
      backgroundColor: '#080C59',
      color: '#A6127E',
      '&:hover': {
        backgroundColor: '#A6127E',
        color: '#080C59',
      }
    },
    
  });

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
                    <Grid>
                        <Typography>
                            SWAG
                        </Typography>
                    </Grid>
                </Grid>
            </Fade>
                
        )
    }
}

export default withStyles(useStyles)(Landing);