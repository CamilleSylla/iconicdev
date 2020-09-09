import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


// assets
import Web from '../../assets/img/Web.svg'
    //domaine
        //icons
import Dev from '../../assets/img/svg/Dev.svg'
import Draw from '../../assets/img/Draw.svg'
import VBA from '../../assets/img/svg/VBA.svg'
            //img
import Keyboard from '../../assets/img/Keyboard.jpg'
import Graph from '../../assets/img/Graph.jpg'
import Ex from '../../assets/img/Ex.jpg'
const useStyles = theme => ({
    root: {
        backgroundColor: '#21254F',
        width: '100%',
        height: 'auto',
        paddingTop: '5%',
        paddingBottom: '5%',
      },
    }
  );

  const Mission = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex augue. Sed sed tellus elit. Donec nec velit quis lectus tincidunt vehicula. Praesent eu quam ullamcorper, interdum libero eu, porttitor nisi. Aliquam tempor id sapien vitae interdum. Vivamus aliquet gravida semper. Nulla nunc ligula, tristique at fermentum vel, rutrum eget lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse commodo dui sit amet sagittis semper. Donec tincidunt nibh ac odio rutrum luctus. Mauris eget condimentum odio. Cras sodales malesuada erat, et condimentum augue pretium at. ';

class Iconic extends React.Component {

    render () {
        const {classes} = this.props;
         return (
            <Grid className={classes.root}>
                
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Iconic);