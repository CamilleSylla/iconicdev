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
            marginBottom :'15%'
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
        gridGap: '5em',
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
        [theme.breakpoints.down('md')]: {
            gridRow: 1,
            gridColumn: 1,
        },
    },
    graph: {
        width: '100%',
        gridColumn: 4,
        [theme.breakpoints.down('md')]: {
            gridRow: 1,
            gridColumn: 2,
        },
    },
    bureau: {
        width: '100%',
        gridColumn: 5,
        [theme.breakpoints.down('md')]: {
            gridRow: 2,
            gridColumn: 1,
        },
    },
    perf: {
        width: '100%',
        gridColumn: 3,
        gridRow: 2,
        [theme.breakpoints.down('md')]: {
            gridRow: 2,
            gridColumn: 2,
        },
    },
    comm: {
        width: '100%',
        gridColumn: 4,
        gridRow: 2,
        [theme.breakpoints.down('md')]: {
            gridRow: 3,
            gridColumn: 1,
        },
    },
    acc: {
        width: '100%',
        gridColumn: 5,
        gridRow: 2,
        [theme.breakpoints.down('md')]: {
            gridRow: 3,
            gridColumn: 2,
        },
    },
    itemcont: {
        width: '100%',
        color: 'white',

    },
    itemImg: {
        width: '50%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '25%'
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
                                <Typography variant="h6">
                                    MAKE YOU BIGGER
                                    </Typography>
                                <Typography variant="h2">
                                    Bienvenue
                                    </Typography>
                                <Typography variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                    Donec bibendum massa ac sem faucibus,
                                    vitae ultricies magna sagittis.
                                    In suscipit volutpat rutrum.
                                    </Typography>
                            </div>

                        </Box>
                        <Grid className={classes.itemContainer} >
                            <Grid className={classes.site} container justify="center">
                                <img className={classes.itemImg} src={Code} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Developpement Web
                                        </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Site Internet
                                        </Typography>
                                </Box>
                            </Grid>
                            <Grid className={classes.graph} container justify="center">
                                <img className={classes.itemImg} src={Gra} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Image de marque
                                        </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Conception Graphique
                                        </Typography>
                                </Box>
                            </Grid>
                            <Grid className={classes.bureau} container justify="center">
                                <img className={classes.itemImg} src={Lap} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Soutien
                                        </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Bureautique
                                        </Typography>
                                </Box>
                            </Grid>


                            <Grid className={classes.perf} container justify="center">
                                <img className={classes.itemImg} src={SEO} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Optimisation
                                            </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Performances
                                            </Typography>
                                </Box>
                            </Grid>
                            <Grid className={classes.comm} container justify="center">
                                <img className={classes.itemImg} src={Fly} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Support graphique
                                            </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Communication
                                            </Typography>
                                </Box>
                            </Grid>
                            <Grid className={classes.acc} container justify="center">
                                <img className={classes.itemImg} src={Set} alt='' />
                                <Box className={classes.itemcont}>
                                    <Typography style={{ fontSize: 10 }}>
                                        Maintenance
                                            </Typography>
                                    <Typography style={{ fontSize: 20 }}>
                                        Accompagnement
                                            </Typography>
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