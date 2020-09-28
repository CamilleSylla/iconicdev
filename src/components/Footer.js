
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


//assets
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ID from '../assets/img/Idsvg.svg'

const useStyles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#838383',
        display: 'grid',
        
    },
    contact: {
        gridRow: 1,
        width: '100%',
        backgroundColor: 'red',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
    },
    txt: {
        gridColumn: '2/ span 4',
        display: 'block',
        [theme.breakpoints.down('md')]: {
            gridColumn: '1',
            gridRow: '1'
          },
    },
    btn: {
        width: '100%',
        gridColumn: 8,
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1',
            gridRow: '2'
          },
    },
    navCont: {
        gridRow: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        color: 'white',
        paddingTop: 50,
        paddingBottom: 50,
    },
    //logo
    logo: {
        gridColumn: '2'
    },

    //Infos Utiles
    about: {
        gridColumn: '3',
        display: 'block',
    },
    contentWidth: {
        marginLeft: '10%',
        marginRight: '10%',
    },
    item: {
        display: 'flex'
    },
    icons: {
        textAlign: 'right',
        marginTop: 10
    },

    //Plan du site
    plan: {
        gridColumn: '4',
        display: 'block',
    },
}
);

class Footer extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.contact}>
                    <div className={classes.txt}>
                        <Typography variant="h4">Vos Projets digitaux commences ici !</Typography>
                        <Typography variant="h5">Soyons en contact</Typography>
                    </div>
                    <div className={classes.btn}>
                        <button> Let's Go !</button>
                    </div>
                </div>
                <div className={classes.navCont}>

                    <div className={classes.logo}>
                        <img src={ID} style={{ width: '70%' }} />
                        <Typography>
                            Make you bigger
                        </Typography>
                    </div>

                    <div className={classes.about}>
                        <div className={classes.contentWidth}>
                            <Typography variant='h6' style={{ marginBottom: '10px', textAlign: 'left' }}>INFOS UTILES</Typography>
                            <div className={classes.item}>
                                <LocationOnIcon />
                                <Typography style={{ marginLeft: '5px' }}>Adresse :</Typography>
                            </div>
                            <Typography style={{ textAlign: 'left', marginLeft: '15%' }}>
                                74B avenue du PDT J.F. Kennedy <br />
                            02100, Saint-Quentin <br />
                            France
                        </Typography>
                            <div className={classes.item}>
                                <LiveHelpIcon />
                                <Typography style={{ marginLeft: '5px' }}>Vous avez des questions ?</Typography>
                            </div>
                            <div className={classes.item} style={{ textAlign: 'left', marginLeft: '15%' }}>
                                <MailOutlineIcon />
                                <Typography style={{ marginLeft: '5px' }}>contact@iconicdev.fr</Typography>
                            </div>
                            <div className={classes.icons}>
                                <FacebookIcon />
                                <LinkedInIcon />
                            </div>
                        </div>
                    </div>

                    <div className={classes.plan}>
                        <div className={classes.contentWidth}>
                            <Typography variant='h6' style={{ marginBottom: '10px', textAlign: 'left' }}>Plan du site</Typography>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>IconicDev</Typography>
                            </div>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>Services</Typography>
                            </div>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>Bac à sable</Typography>
                            </div>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>Contact</Typography>
                            </div>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>CGU</Typography>
                            </div>
                            <div className={classes.item} style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                <ArrowForwardIcon />
                                <Typography style={{ marginLeft: '5px' }}>Mention Légales</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Footer)