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
import Code from '../../assets/img/Comp.jpg'
import Tab from '../../assets/img/Tab.jpg'
import Palette from '../../assets/img/Palette.jpg'

//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
        backgroundColor: '#21254F',
        width: '100%',
        height: 'auto',
        paddingTop: '5%',
        paddingBottom: '5%',
        display: 'inline-flex'
      },
      imgContainer: {
        width: '50%',
        height: 500,
        opacity: 0.2,
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            opacity: 1
          }
      },
      
      domaineBox: {
        width: '40%',
        textAlign: 'left',
        color: 'white',
        textAlign: 'justify',
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
            <Grid className={classes.root}>
                <Grid className={classes.imgContainer} container justify="center">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={Code} alt="Computer" style={imgSize}/>
                            </div>
                            <div class="flip-card-back">
                            <img src={Tab} alt="Tab" style={imgSize}/>
                            </div>
                        </div>
                    </div> 
                </Grid>
                <Grid className={classes.domaineBox}>
                            <Typography variant="h4">
                                Marquez le web de votre empreinte
                            </Typography>
                            <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh odio, dignissim ut pulvinar non, pretium in neque. Curabitur eget fermentum diam. Nullam ut vestibulum urna. Phasellus egestas quis turpis quis dapibus. Maecenas nunc orci, scelerisque id feugiat vitae, commodo id velit. Nam tincidunt gravida pretium. Duis porta tristique augue, a facilisis lorem rhoncus vel. Aliquam libero nisl, convallis eget volutpat non, porttitor eu sem. Praesent sed ipsum justo. Curabitur rhoncus nisi nulla, nec dictum justo rhoncus sagittis. Phasellus at malesuada elit, id sollicitudin mauris. Integer non nunc sapien. Donec lacinia vestibulum massa eu imperdiet.

Etiam erat tortor, mattis vel lacinia imperdiet, eleifend eget turpis. Cras congue ultricies faucibus. Cras venenatis purus ut accumsan convallis. Cras commodo, dolor suscipit vulputate volutpat, eros tortor vulputate ante, sed tempus magna diam sit amet neque. Praesent suscipit, mi ac laoreet placerat, elit ligula elementum diam, at mollis arcu nisi sed tortor. In eu maximus diam. Maecenas et fringilla odio. Aliquam sed lacinia mi. Praesent luctus et sem sit amet ornare. Mauris sed sodales sem. Vivamus mollis quis massa sit amet molestie. Mauris faucibus ultricies ligula quis vehicula.

Maecenas tempus hendrerit sapien vitae accumsan. Nunc convallis a metus ut dapibus. Nullam sapien ipsum, rhoncus sit amet neque vel, interdum vulputate felis. Fusce facilisis libero massa, non eleifend arcu interdum et. Proin id suscipit tellus. Vivamus ut congue magna. Donec et lacus lectus. Donec at nulla nec tortor gravida accumsan vitae nec dolor. Maecenas nec tincidunt nibh. Donec eget tortor ac est consectetur commodo. Quisque interdum mauris quis lobortis posuere. Integer tempor neque vitae ornare hendrerit. Curabitur mollis a tellus in convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sagittis maximus tortor. 
                            </Typography>
                </Grid>
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Iconic);