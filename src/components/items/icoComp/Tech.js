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
import Node from '../../../assets/img/Icons/Node.svg';
import JS from '../../../assets/img/Icons/JS.svg';
import Pgsql from '../../../assets/img/Icons/Pgsql.svg';
import WP from '../../../assets/img/Icons/WP.svg';
import VBA from '../../../assets/img/Icons/VBA.svg';
import Adobe from '../../../assets/img/Icons/Adobe.svg';
const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
      },
      items: {
          display:  'inline-flex'
      },
      boxSizing: {
          marginTop: '5%',
          width: 150
      }
    }
  );

class Tech extends React.Component {

    render()  {

    const {classes} = this.props

         return (
            <Grid className={classes.root} container justify="center">
                <Grid className={classes.items}>
                <Box className={classes.boxSizing}>
                    <img className='imgLogo' src={Html} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={Css} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={ReactJS} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={Node} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={JS} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={Pgsql} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={WP} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={VBA} alt=''/>
                </Box>
                <Box className={classes.boxSizing}>
                <img className='imgLogo' src={Adobe} alt=''/>
                </Box>
                </Grid>
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Tech)