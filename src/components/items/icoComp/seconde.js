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
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'center',

        },

    },
    layer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        backgroundColor: 'rgba(56, 49, 91, 0.6)',
        [theme.breakpoints.down('md')]: {
            paddingTop: '15%',
            paddingBottom: '15%',
        },

    },
    Grids: {
        width: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 50,
        gridAutoRows: 'minmax(100px, auto)',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridAutoRows: 'minmax(250px, auto)',
        },
    },
    imgContainer: {
        gridColumn: 2,
        gridRow: 1,
        opacity: 0.2,
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            opacity: 1
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },

    domaineBox: {
        textAlign: 'left',
        color: 'white',
        textAlign: 'justify',
        gridColumn: 1,
        gridRow: 1,
        border: ' 2px solid white',
        boxShadow: '-30px 30px 0px 0px rgba(166, 18, 126, 0.4)',
        '&:hover': {
            '& $title': {
                WebkitTextFillColor: 'transparent',
                textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
                letterSpacing: ' 0.1em',
            }
        },
        [theme.breakpoints.down('md')]: {
            gridColumn: 1,
            gridRow: 1,
            background: 'rgba(33, 37, 79, 0.7)',
            boxShadow: '-20px 20px 0px 0px rgba(166, 18, 126, 0.4)',
        },
    },
    title: {
        letterSpacing: ' 0.1em',
        marginLeft: '5%',
        fontSize: 35,
        textTransform: 'uppercase',
        textAlign: 'left',
        WebkitTextFillColor: 'white',
        WebkitTextStroke: '1px',
        WebkitTextStrokeColor: 'white',
        textShadow: '-7px 7px #ff1f8f, -14px 14px #21254F;',
        webkitTransition: 'all 0.5s ease',
        mozTransition: 'all 0.5s ease',
        oTransition: 'all 0.5s ease',
        transition: 'all 0.5s ease',

        [theme.breakpoints.down('md')]: {
            fontSize: 25,
            textAlign: 'center',
            WebkitTextStroke: '2px',
            textShadow: '0px 7px #ff1f8f, 0px 14px #21254F;',
            '&:hover': {
                textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
            },
        },
    }
}
);



class Seconde extends React.Component {

    render() {
        const { classes } = this.props;
        const imgSize = {
            width: '100%',
            height: '100%'
        };
        return (
            <Grid className={classes.root} >
                <div className={classes.layer} container justify="center" >
                    <Grid className={classes.Grids} >
                        <Grid className={classes.domaineBox}>
                            <p className={classes.title}>
                                Illustrez vos idées
                                    </p>
                            <Typography variant="body2" style={{ margin: '5%' }}>
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
                                        <img src={Pap} alt="Computer" style={imgSize} />
                                    </div>
                                    <div class="flip-card-back">
                                        <img src={Poly} alt="Tab" style={imgSize} />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>


            </Grid>
        )
    }
}

export default withStyles(useStyles)(Seconde);