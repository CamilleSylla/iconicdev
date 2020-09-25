
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//assets
import ID from '../assets/img/Idsvg.svg'

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 300,
    },
    link: {
        paddingBottom: '20px',
        borderBottom: '4px solid white',
        color: 'white',
        borderRadius: 25,
        webkitTransition: 'all .7s ease',
        mozTransition: 'all .7s ease',
        oTransition: 'all .7s ease',
        transition: 'all .7s ease',
        '&:hover': {
            paddingTop: '20px',
            paddingBottom: '20px',
            border: '4px solid white',
            borderRadius: 25,
            color: 'white',
        }
    },
    footNav: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4e4e4e',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridAutoRows: 'minmax(20px, auto)',
    },
    logo: {
        gridColumn: 2,
        gridRow: 1
    },
    plan: {
        gridColumn: 2,
        gridRow: 2
    },
    menu: {
        gridColumn: 3,
        gridRow: 2
    },
    services: {
        gridColumn: 3,
        gridRow: 3
    },
    portfolio: {
        gridColumn: 3,
        gridRow: 4
    },
    contact: {
        gridColumn: 3,
        gridRow: 5
    }

}
);

class Footer extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.footNav}>
                    <img className={classes.logo} src={ID} />
                    <Typography className={classes.plan}>Plan du site :</Typography>
                        <Typography className={classes.menu}>IconicDev</Typography>
                        <Typography className={classes.services}>Services</Typography>
                        <Typography className={classes.portfolio}>PortFolio</Typography>
                        <Typography className={classes.contact}>Contact</Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Footer)