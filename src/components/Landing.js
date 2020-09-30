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
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        backgroundColor: 'Transparent',
    },
    imgdim: {
        width: '35%',
        gridColumn: 2, 
    },
    bienvenueBox: {
        gridColumn: 3, 
        width: '35%',
        marginLeft: '5%',
        textAlign: 'left',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'justify',
    },
    itemContainer: {
        width: '100%',
        display: 'inline-flex',
        gridColumn: 4, 

    },
    itemContainer2: {
        width: '100%',
        display: 'inline-flex',
        marginTop: '2%',
    },
    itemBox: {
        width: '20%',
        display: 'inline-flex',
        textAlign: 'left',
        marginRight: '2.5%',
        marginLeft: '2.5%',
        color: 'white',
    },
    itemImg: {
        width: '15%',
        height: 'auto',
        marginRight: '10%',
    },
    itemFont: {

    },
    particles: {
        position: 'absolute !important',
        width: '100%'
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
                        <div>
                            <Box display="flex" justifyContent="center" m={1} p={1} >
                                <Box className={classes.imgdim}>
                                    <Tilt className="Tilt br2" options={{ max: 100, reverse: true }} >
                                        <img className="imglog" src={ID} alt="logo" />
                                    </Tilt>
                                </Box>
                                <Box className={classes.bienvenueBox}>
                                    <Typography variant="h6">
                                        IconicDev
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
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <Grid className={classes.itemContainer} container justify="center">
                                <Grid className={classes.itemBox}>
                                    <img className={classes.itemImg} src={Code} alt='' />
                                    <Box>
                                        <Typography style={{ fontSize: 10 }}>
                                            Developpement Web
                                        </Typography>
                                        <Typography style={{ fontSize: 20 }}>
                                            Site Internet
                                        </Typography>
                                        <Typography style={{ fontSize: 12 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid className={classes.itemBox}>
                                    <img className={classes.itemImg} src={Gra} alt='' />
                                    <Box>
                                        <Typography style={{ fontSize: 10 }}>
                                            Image de marque
                                        </Typography>
                                        <Typography style={{ fontSize: 20 }}>
                                            Conception Graphique
                                        </Typography>
                                        <Typography style={{ fontSize: 12 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid className={classes.itemBox}>
                                    <img className={classes.itemImg} src={Lap} alt='' />
                                    <Box>
                                        <Typography style={{ fontSize: 10 }}>
                                            Soutien
                                        </Typography>
                                        <Typography style={{ fontSize: 20 }}>
                                            Bureautique
                                        </Typography>
                                        <Typography style={{ fontSize: 12 }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid className={classes.itemContainer2} container justify="center">
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={SEO} alt='' />
                                        <Box className={classes.itemFont}>
                                            <Typography style={{ fontSize: 10 }}>
                                                Optimisation
                                            </Typography>
                                            <Typography style={{ fontSize: 20 }}>
                                                Performances
                                            </Typography>
                                            <Typography style={{ fontSize: 12 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={Fly} alt='' />
                                        <Box>
                                            <Typography style={{ fontSize: 10 }}>
                                                Support graphique
                                            </Typography>
                                            <Typography style={{ fontSize: 20 }}>
                                                Communication
                                            </Typography>
                                            <Typography style={{ fontSize: 12 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={Set} alt='' />
                                        <Box>
                                            <Typography style={{ fontSize: 10 }}>
                                                Maintenance
                                            </Typography>
                                            <Typography style={{ fontSize: 20 }}>
                                                Accompagnement
                                            </Typography>
                                            <Typography style={{ fontSize: 12 }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid>

                            </Grid>
                        </div>

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