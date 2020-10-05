
import React from 'react';
// Rooter
import { Link } from 'react-router-dom';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//animation
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt';
import Reveal from 'react-reveal/Reveal';
import Typing from 'react-typing-animation';


//assets
import ID from '../assets/img/Idsvg.svg';

const useStyles = theme => ({
    root: {
        width: '100%',
    },
    header: {
        display: 'grid',
        color: 'white',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridAutoRows: 'minmax(50px, auto)',
        borderBottomStyle: 'solid',
        borderBottomColor: '#A6127E',
        background: 'rgba(166, 18, 126, 0.1)',
        webkitTransition: 'all .7s ease',
        mozTransition: 'all .7s ease',
        oTransition: 'all .7s ease',
        transition: 'all .7s ease',
        '&:hover': {
            background: 'rgba(33, 37, 79, 0.6)',
        }
    },
    imgNav: {
        gridColumn: 2,
        gridRow: 1,
    },
    navBox1: {
        gridColumn: 9,
        gridRow: 1,
        textAlign: 'center',
    },
    navBox2: {
        gridColumn: 10,
        gridRow: 1,
        textAlign: 'center',
    },
    navBox3: {
        gridColumn: 11,
        gridRow: 1,
        textAlign: 'center',
    },
    navBox4: {
        gridColumn: 12,
        gridRow: 1,
        textAlign: 'center',
    },
    imgdim: {
        width: "35%",
    },
    navItem: {
        color: '#A6127E',
        marginRight: 15,
        marginLeft: 15,
        padding: 20,
        textAlign: 'center',
        marginBottom: 20,
        '&:hover': {
            color: '#080C59'
        }
    },
    hoverEffect: {
        backgroundColor: 'transparent',
        marginTop: '25%',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            borderBottomStyle: 'solid',
            borderBottomColor: '#A6127E',
            color: '#A6127E',
        }
    },
}
);

class Nav extends React.Component {

    render() {
        const { classes } = this.props
        return (

            <div className={classes.header}>
                <Link className={classes.imgNav} to='/IconicDev'>
                <img  src={ID} alt='IconicDev' />
                </Link>
                <Link className={classes.navBox1}
                    style={{ textDecoration: 'none', color: 'white' }}
                    to='/IconicDev'
                    >
                    <Box className={classes.hoverEffect}>
                        <Typography>
                            IconicDev
                                                    </Typography>
                    </Box>
                </Link>
                <Link className={classes.navBox2} 
                style={{ textDecoration: 'none', color: 'white' }}
                to='/Services'
                >
                    <Box className={classes.hoverEffect}>
                        <Typography>
                            Services
                                                    </Typography>
                    </Box>
                </Link>
                <Link to='/theLab' className={classes.navBox3} style={{ textDecoration: 'none', color: 'white' }}>
                    <Box className={classes.hoverEffect}>
                        <Typography>
                            The Lab
                                                    </Typography>
                    </Box>
                </Link>
                <Link className={classes.navBox4} style={{ textDecoration: 'none', color: 'white' }}>
                    <Box className={classes.hoverEffect}>
                        <Typography>Contact</Typography>
                    </Box>
                </Link>

            </div>


        )
    }
}

export default withStyles(useStyles)(Nav) 