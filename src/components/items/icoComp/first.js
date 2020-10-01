import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Keyboard from '../../../assets/img/Keyboard.jpg'
import Code from '../../../assets/img/Compu.jpg'

//animation
import Fade from 'react-reveal/Fade';

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
    },
    grids: {
        width: '80%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 50,
        gridAutoRows: 'minmax(100px, auto)',
        
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridAutoRows: 'minmax(250px, auto)',
            paddingTop: '15%',
            paddingBottom: '15%',
        },
    },
    imgContainer: {
        gridColumn: 1,
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
            display: 'none'
        },
    },

    domaineBox: {
        gridColumn: 2,
        gridRow: 1,
        textAlign: 'left',
        color: 'white',
        textAlign: 'justify',
        border: ' 2px solid white',
        boxShadow: '30px 30px 0px 0px #21254F',
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
            boxShadow: '20px 20px 0px 0px #21254F',
        },
    },
    title: {
        marginLeft: '5%',
        letterSpacing: ' 0.1em',
        fontSize: 35,
        textTransform: 'uppercase',
        textAlign: 'left',
        WebkitTextFillColor: 'white',
        WebkitTextStroke: '1px',
        WebkitTextStrokeColor: 'white',
        textShadow: '7px 7px #ff1f8f, 14px 14px #21254F;',
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

const Mission = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex augue. Sed sed tellus elit. Donec nec velit quis lectus tincidunt vehicula. Praesent eu quam ullamcorper, interdum libero eu, porttitor nisi. Aliquam tempor id sapien vitae interdum. Vivamus aliquet gravida semper. Nulla nunc ligula, tristique at fermentum vel, rutrum eget lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse commodo dui sit amet sagittis semper. Donec tincidunt nibh ac odio rutrum luctus. Mauris eget condimentum odio. Cras sodales malesuada erat, et condimentum augue pretium at. ';

class First extends React.Component {

    render() {
        const { classes } = this.props;
        const imgSize = {
            width: '100%',
            height: '100%'
        };
        return (
            <Grid className={classes.root} container justify="center">
                <div className={classes.grids}>
                    <Grid className={classes.imgContainer} container justify="center">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={Keyboard} alt="Computer" style={imgSize} />
                                </div>
                                <div class="flip-card-back">
                                    <img src={Code} alt="Tab" style={imgSize} />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid className={classes.domaineBox}>
                        <p className={classes.title}>
                            Marquez le web de votre empreinte
                            </p>
                        <Typography variant="body2" style={{ margin: '5%' }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh odio, dignissim ut pulvinar non, pretium in neque. Curabitur eget fermentum diam. Nullam ut vestibulum urna. Phasellus egestas quis turpis quis dapibus. Maecenas nunc orci, scelerisque id feugiat vitae, commodo id velit. Nam tincidunt gravida pretium. Duis porta tristique augue, a facilisis lorem rhoncus vel. Aliquam libero nisl, convallis eget volutpat non, porttitor eu sem. Praesent sed ipsum justo. Curabitur rhoncus nisi nulla, nec dictum justo rhoncus sagittis. Phasellus at malesuada elit, id sollicitudin mauris. Integer non nunc sapien. Donec lacinia vestibulum massa eu imperdiet.

                            Etiam erat tortor, mattis vel lacinia imperdiet, eleifend eget turpis. Cras congue ultricies faucibus. Cras venenatis purus ut accumsan convallis. Cras commodo, dolor suscipit vulputate volutpat, eros tortor vulputate ante, sed tempus magna diam sit amet neque. Praesent suscipit, mi ac laoreet placerat, elit ligula elementum diam, at mollis arcu nisi sed tortor. In eu maximus diam. Maecenas et fringilla odio. Aliquam sed lacinia mi. Praesent luctus et sem sit amet ornare. Mauris sed sodales sem. Vivamus mollis quis massa sit amet molestie.
                            </Typography>
                    </Grid>
                </div>

            </Grid>
        )
    }
}

export default withStyles(useStyles)(First);