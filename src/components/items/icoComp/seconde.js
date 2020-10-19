import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Keyboard from '../../../assets/img/Keyboard.jpg'
import Code from '../../../assets/img/Comp.jpg'

//animation
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

//assets
import Cerf from '../../../assets/img/Cerf.jpg';
import Pap from '../../../assets/img/DesR.svg';
import { ArrowRight } from '@material-ui/icons';

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
        opacity: 1,
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
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            boxShadow: '-50px 50px 0px 0px rgba(166, 18, 126, 0.4)',
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
            '&:hover': {
                boxShadow: '-20px 20px 0px 0px rgba(166, 18, 126, 0.4)',
            }
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
    },
    btn: {
        width: "100%",
        
        textAlign: 'center',
        padding: '10%',
        fontWeight: 'bold',
        color: 'white',
        border: " 5px solid white",
        boxShadow: "10px 10px white",
        webkitTransition: 'all 0.5s ease',
        mozTransition: 'all 0.5s ease',
        oTransition: 'all 0.5s ease',
        transition: 'all 0.5s ease',
        '&:hover': {
            boxShadow: "5px 5px #21254F",
            border: " 5px solid #21254F",
            color: '#21254F',
            background: 'white'
        }

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
                                . Illustrez vos idées
                                    </p>
                            <Typography variant="body2" style={{ margin: '5%', marginTop: '20px',fontSize: "17px",fontFamily:'Oswald, sans-serif', letterSpacing: "0.1em", fontWeight: "700" }} >
                            Le visuel est le premier élément perçu par les clients. <br/><br/>
                            Une identité graphique complete vous permet de vous différencier de vos concurents.<br/><br/>
                            Grace à ses connaissances en design, IconicDev établira 
                            votre charte graphique.
                            </Typography>
                            <Typography variant="body2" style={{ margin: '5%', marginTop: '20px',fontSize: "17px",fontFamily:'Oswald, sans-serif', letterSpacing: "0.1em", fontWeight: "700" }} >
                                En plus de cela, IconicDev vous aidera a promouvoir votre activité 
                                avec la conception de Flyer, carte de visite, affiche etc...
                            </Typography>
                            <Link style={{ textDecoration: 'none', float : "right", marginRight: "10%",marginBottom: "5%",}}>
                            <p className={classes.btn}>
                                Let's Go
                            </p>
                            </Link>
                        </Grid>
                        <Grid className={classes.imgContainer} container justify="center">
                           
                                        <img src={Pap} alt="Computer" style={imgSize} />
                                    
                        </Grid>
                    </Grid>
                </div>


            </Grid>
        )
    }
}

export default withStyles(useStyles)(Seconde);