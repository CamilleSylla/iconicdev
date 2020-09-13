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

// animations
import Fade from 'react-reveal/Fade';


const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
      },
      items: {
        marginTop: '5%',
          display:  'inline-flex'
      },
      items2: {
        marginTop: '5%',
          display:  'block'
      },
      boxSizing: {
          
          width: 150
      }
    }
  );

class Tech extends React.Component {

    render()  {

    const {classes} = this.props

         return (
            <Grid className={classes.root} container justify="center">
                <Grid className={classes.items2} container justify="center">
                    <Typography variant="h4">
                        Quelques technologies utilisée
                    </Typography>
                </Grid>
                <Grid className={classes.items}>
                <Fade delay={800}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={Html} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={900}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={Css} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1000}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={ReactJS} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1100}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={Node} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1200}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={JS} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1300}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={Pgsql} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1400}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={WP} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1500}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={VBA} alt=''/>
                    </Box>
                </Fade>
                <Fade delay={1600}>
                    <Box className={classes.boxSizing}>
                        <img className='imgLogo' src={Adobe} alt=''/>
                    </Box>
                </Fade>
                
                </Grid>
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Tech)