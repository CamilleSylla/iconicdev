import React from 'react';

//component

//material ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';

//assets
import ID from "../../assets/img/ID.png";

//animation
import Tilt from 'react-tilt';


const useStyles = theme => ({
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

});
class Welcome extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" className={classes.root}>

          <Box display="flex" justifyContent="center" m={1} p={1} >
            <Box className={classes.imgdim}>
              <Tilt className="Tilt br2" options={{ max: 100 }} >
                <img className="imglog" src={ID} alt="logo" />
              </Tilt>
            </Box>
          </Box>
          <Grid>
            <Typography>La solution pour vos projets web</Typography>
          </Grid>
          <Grid>
            <IconButton className={classes.btn} aria-label="delete"
              onClick={this.props.buttonClick}>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(useStyles)(Welcome);