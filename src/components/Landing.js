import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//component
import Iconic from './items/iconic';
import Particles from 'react-particles-js'

//animation
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt';
import Reveal from 'react-reveal/Reveal';
import Typing from 'react-typing-animation';


//assets
import ID from '../assets/img/Idsvg.svg';
import Code from '../assets/img/Code.svg';
import SEO from '../assets/img/Seo.svg';
import Gra from '../assets/img/Gra.svg';
import Fly from '../assets/img/Fly.svg';
import Lap from '../assets/img/Lap.svg';
import Set from '../assets/img/Set.svg';

const useStyles = theme => ({
    root: {
        width: '100%',
        textAlign: 'center',

    },
    bienvenueContainer: {
        width: "100%",
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        backgroundColor: 'Transparent',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
    },
    imgGrid: {
        width: '100%',
        gridColumn: '1 / span 2',
        gridRow: 1,

    },
    center: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '25%',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
    },
    bienvenueBox: {
        gridColumn: 2,
        gridRow: '2 / span 2',
        textAlign: 'justify',
        color: 'white',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            gridRow: 2,
            gridColumn: 1,
            textAlign: 'center',
            position: 'static',
            marginBottom: '15%'
        },

    },
    slogan: {
        letterSpacing: ' 0.4em',
        fontSize: 20,
        color: '#21254F',
        WebkitTextStroke: '2px',
        WebkitTextStrokeColor: '#21254F',
        webkitTransition: 'all 0.5s ease',
        mozTransition: 'all 0.5s ease',
        oTransition: 'all 0.5s ease',
        transition: 'all 0.5s ease',
        '&:hover': {
            textShadow: '-20px -20px white, 20px 20px #A6127E;',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 15,
            WebkitTextStroke: '2px',
            '&:hover': {
                textShadow: '0px -20px white, 0px 20px #A6127E;',
            },
        },
    },
    bienvenueTitle: {
        letterSpacing: ' 0.1em',
        fontSize: 80,
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '2px',
        WebkitTextStrokeColor: 'white',
        textShadow: '7px 7px #ff1f8f, 14px 14px #21254F;',
        webkitTransition: 'all 0.5s ease',
        mozTransition: 'all 0.5s ease',
        oTransition: 'all 0.5s ease',
        transition: 'all 0.5s ease',
        '&:hover': {
            textShadow: '-20px -20px #A6127E, 20px 20px #21254F;',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 50,
            WebkitTextStroke: '2px',
            textShadow: '0px 7px #ff1f8f, 0px 14px #21254F;',
            '&:hover': {
                textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
            },
        },
    },
    element: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        marginRight: '20%',
        [theme.breakpoints.down('md')]: {
            position: 'static',
            top: '0%',
            transform: 'translateY(0%)',
            marginRight: '10%',
            marginLeft: '10%'
        },

    },
    itemContainer: {
        gridColumn: 1,
        gridRow: '2 / span 2',
        display: ' grid',
        width: '100%',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        gridGap: '2em',
        backgroundColor: 'Transparent',
        [theme.breakpoints.down('md')]: {
            gridRow: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridRowGap: '50px',
            gridColumnGap: '0px',
        },

    },
    site: {
        width: '100%',
        gridColumn: 3,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 1,
            gridColumn: 1,
        },
    },
    graph: {
        width: '100%',
        gridColumn: 4,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 1,
            gridColumn: 2,
            '&:hover': {
                color: 'white',
                boxShadow: '-10px 10px 0px 0px #21254F',
                border: '3px solid white',
            },
        },
    },
    bureau: {
        width: '100%',
        gridColumn: 5,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 2,
            gridColumn: 1,
        },
    },
    perf: {
        width: '100%',
        gridColumn: 3,
        gridRow: 2,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 2,
            gridColumn: 2,
            '&:hover': {
                color: 'white',
                boxShadow: '-10px 10px 0px 0px #21254F',
                border: '3px solid white',
            },
        },
    },
    comm: {
        width: '100%',
        gridColumn: 4,
        gridRow: 2,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 3,
            gridColumn: 1,
        },
    },
    acc: {
        width: '100%',
        gridColumn: 5,
        gridRow: 2,
        padding: 10,
        webkitTransition: 'all .3s ease',
        mozTransition: 'all .3s ease',
        oTransition: 'all .3s ease',
        transition: 'all .3s ease',
        border: '3px solid transparent',
        '&:hover': {
            color: 'white',
            boxShadow: '10px 10px 0px 0px #21254F',
            border: '3px solid white',
        },
        [theme.breakpoints.down('md')]: {
            gridRow: 3,
            gridColumn: 2,
            '&:hover': {
                color: 'white',
                boxShadow: '-10px 10px 0px 0px #21254F',
                border: '3px solid white',
            },
        },
    },
    itemcont: {
        width: '100%',
        color: 'white',

    },
    itemImg: {
        width: '40%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '25%'
        },
    },
    itemTitle: {
        letterSpacing: ' 0.1em',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        webkitTransition: 'all 0.5s ease',
        mozTransition: 'all 0.5s ease',
        oTransition: 'all 0.5s ease',
        transition: 'all 0.5s ease',
        '&:hover': {
            textShadow: '0px 8px #A6127E',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 15,
            '&:hover': {
                textShadow: '0px 10px #A6127E;',
            },
        },
    },
    particles: {
        position: 'absolute !important',
        width: '100%',
    }
}
);

class Landing extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <Fade right>
                <Particles className={classes.particles}
                    params={{
                        "particles": {
                            "number": {
                                "value": 250,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 6,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 2,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
                <Grid container justify="center" className={classes.root}>
                    <Grid className={classes.bienvenueContainer}>
                        <div className={classes.imgGrid}>
                            <Tilt className="Tilt br2" options={{ max: 100, reverse: true }} >
                                <img src={ID} alt="logo" className={classes.center} />
                            </Tilt>
                        </div>

                        <Box className={classes.bienvenueBox}>
                            <div className={classes.element}>
                                <p className={classes.slogan}>
                                    MAKE YOU BIGGER
                                    </p>
                                <span className={classes.bienvenueTitle}>
                                    Bienvenue
                                    </span>
                                <Typography variant="body2" style={{ marginTop: '20px' }}>
                                    Ce faire une place sur internet est une tache
                                    technique, complexe et difficile. IconicDev
                                    vous propose ses services afin de vous accompagner
                                    dans votre strategie digital.
                                    </Typography>
                            </div>

                        </Box>
                        <Grid className={classes.itemContainer} >
                            <Grid className={classes.site} container justify="center">
                                <img className={classes.itemImg} src={Code} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Developpement Web
                                        </Typography>
                                    <p className={classes.itemTitle} >
                                        Site Internet
                                        </p>
                                </Box>
                            </Grid>
                            <Grid className={classes.graph} container justify="center">
                                <img className={classes.itemImg} src={Gra} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Image de marque
                                        </Typography>
                                    <p className={classes.itemTitle} >
                                        Graphisme
                                        </p>
                                </Box>
                            </Grid>
                            <Grid className={classes.bureau} container justify="center">
                                <img className={classes.itemImg} src={Lap} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Soutien
                                        </Typography>
                                    <p className={classes.itemTitle} >
                                        Bureautique
                                        </p>
                                </Box>
                            </Grid>


                            <Grid className={classes.perf} container justify="center">
                                <img className={classes.itemImg} src={SEO} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Optimisation
                                            </Typography>
                                    <p className={classes.itemTitle} >
                                        Performances
                                            </p>
                                </Box>
                            </Grid>
                            <Grid className={classes.comm} container justify="center">
                                <img className={classes.itemImg} src={Fly} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Support graphique
                                            </Typography>
                                    <p className={classes.itemTitle} >
                                        Communication
                                            </p>
                                </Box>
                            </Grid>
                            <Grid className={classes.acc} container justify="center">
                                <img className={classes.itemImg} src={Set} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10, marginTop :'10px' }}>
                                        Maintenance
                                            </Typography>
                                    <p className={classes.itemTitle} >
                                        Accompagnement
                                            </p>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid>

                        </Grid>

                    </Grid>
                    <Grid>
                        <Iconic />
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(Landing);