import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Keyboard from '../../../assets/img/Keyboard.jpg'
import Code from '../../../assets/img/Comp.jpg'

//animation
import Fade from 'react-reveal/Fade';

//assets
import Cerf from '../../../assets/img/Cerf.jpg';
import Pap from '../../../assets/img/Pap.jpg';
import Poly from '../../../assets/img/Poly.png';

const useStyles = theme => ({
    root: {
        width: '100%',
        marginTop: '5%',
        backgroundImage: `url(${Cerf})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
      },
      layer:{
        width: '100%',
        paddingTop: '5%',
        paddingBottom: '5%',
        display: 'inline-flex',
        backgroundColor: 'rgba(56, 49, 91, 0.6)',
      },
      imgContainer: {
        width: '55%',
        height: 'auto',
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
        width: '35%',
        textAlign: 'left',
        color: 'white',
        textAlign: 'justify',
    },
    }
  );

  const Mission = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex augue. Sed sed tellus elit. Donec nec velit quis lectus tincidunt vehicula. Praesent eu quam ullamcorper, interdum libero eu, porttitor nisi. Aliquam tempor id sapien vitae interdum. Vivamus aliquet gravida semper. Nulla nunc ligula, tristique at fermentum vel, rutrum eget lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse commodo dui sit amet sagittis semper. Donec tincidunt nibh ac odio rutrum luctus. Mauris eget condimentum odio. Cras sodales malesuada erat, et condimentum augue pretium at. ';

class Seconde extends React.Component {

    render () {
        const {classes} = this.props;
        const imgSize = {
            width: '100%',
            height: '100%'
        };
         return (
            <Grid className={classes.root} >
                <Grid className={classes.layer} container justify="center">
                    <Grid className={classes.domaineBox}>
                                <Typography variant="h4">
                                    Illustrez vos idées
                                </Typography>
                                <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Proin nibh odio, dignissim ut pulvinar non, pretium in neque. 
                                Curabitur eget fermentum diam. Nullam ut vestibulum urna. 
                                Phasellus egestas quis turpis quis dapibus. Maecenas nunc orci, 
                                scelerisque id feugiat vitae, commodo id velit. Nam tincidunt gravida 
                                pretium. Duis porta tristique augue, a facilisis lorem rhoncus vel. Al
                                iquam libero nisl, convallis eget volutpat non, porttitor eu sem. Prae
                                sent sed ipsum justo. Curabitur rhoncus nisi nulla, nec dictum justo rh
                                oncus sagittis. Phasellus at malesuada elit, id sollicitudin mauris. In
                                teger non nunc sapien. Donec lacinia vestibulum massa eu imperdiet.
                                Etiam erat tortor, mattis vel lacinia imperdiet, eleifend eget turpis. 
                                Cras congue ultricies faucibus. Cras venenatis purus ut accumsan convallis. 
                                Cras commodo, dolor suscipit vulputate volutpat, eros tortor vulputate ante,
                                 sed tempus magna diam sit amet neque. Praesent suscipit, mi ac laoreet placerat
                                 , elit ligula elementum diam, at mollis arcu nisi sed tortor. In eu maximus diam
                                 . Maecenas et fringilla odio. Aliquam sed lacinia mi. Praesent luctus et sem sit ame
                                 t ornare. Mauris sed sodales sem. Vivamus mollis quis massa sit amet molestie. 
                                </Typography>
                    </Grid>
                    <Grid className={classes.imgContainer} container justify="center">
                        <div class="flip-card" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Pap} alt="Computer" style={imgSize}/>
                                </div>
                                <div class="flip-card-back">
                                <img src={Poly} alt="Tab" style={imgSize}/>
                                </div>
                            </div>
                        </div> 
                    </Grid>
                </Grid>
                
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Seconde);