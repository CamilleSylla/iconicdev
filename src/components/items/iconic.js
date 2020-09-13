import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//component
import First from './icoComp/first';
import Seconde from './icoComp/seconde';
import Tech from './icoComp/Tech';
import Arg from './icoComp/Arg';

//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
        backgroundColor: '#38315B',
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
        const imgSize = {
            width: '100%',
            height: '100%'
        };
         return (
            <Grid className={classes.root} >
                <First/>
                <Seconde/>
                <Tech/>
                <Arg/>
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Iconic);