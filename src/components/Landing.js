import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//component
import Iconic from './items/iconic'

//animation
import Fade from 'react-reveal/Fade'
import Tilt from'react-tilt';
import Reveal from 'react-reveal/Reveal';
import Typing from 'react-typing-animation';


//assets
import ID from '../assets/img/ID.png';
import Code from '../assets/img/Code.svg';
import SEO from '../assets/img/Seo.svg';
import Gra from '../assets/img/Gra.svg';
import Fly from '../assets/img/Fly.svg';
import Lap from '../assets/img/Lap.svg';
import Set from '../assets/img/Set.svg';

const useStyles = theme => ({
    root: {
      width: '100%',
      display: "block",
      textAlign: 'center'
    },
    navCol:{
        background: 'linear-gradient(339deg, rgba(166,18,126,0.7) 0%, rgba(8,12,89,0.7) 100%)',
        opacity: 0.5,
        webkitTransition: 'all .5s ease',
        mozTransition: 'all .5s ease',
        oTransition: 'all .5s ease',
        transition: 'all .5s ease',
        '&:hover': {
            opacity: 1
          }
    },
    hoverEffect:{
        backgroundColor: 'transparent',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15,
        marginRight:30,
        borderBottomStyle : 'solid',
        borderBottomColor: 'transparent',
        webkitTransition: 'all 1s ease',
        mozTransition: 'all 1s ease',
        oTransition: 'all 1s ease',
        transition: 'all 1s ease',
        '&:hover': {
            borderBottomStyle : 'solid',
            borderBottomColor: '#A6127E',
            color: '#A6127E',
          }
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
        borderBottomStyle: 'solid',
        borderBottomColor: '#A6127E',
        
    },
    imgNav: {
        width: '10%',
      },
      navLink:{
        display: 'inline-flex',
        height: '100%'
      },
      navBox:{
        position: 'relative',
        textAlign: 'center',
      },
    imgdim: {
      width: "25%",
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
    bienvenueContainer: {
        width: "100%",
        height: 600,
        backgroundColor: 'Transparent'
    },
    bienvenueBox: {
        width: '45%',
        textAlign: 'left',
        color: 'white',
        marginLeft:'5%'
    },
    itemContainer:{
        width: '100%',
        display: 'inline-flex',
        
    },
    itemContainer2:{
        width: '100%',
        display: 'inline-flex',
        marginTop: '2%'
    },
    itemBox:{
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
        fontSize:'0.1em',
    },
    }
  );

class Landing extends React.Component {

    render () {
        const {classes} = this.props
        return (
            <Fade right>
                <Grid container justify="center" className={classes.root}>
                        <header className={classes.navCol}>
                            <div className={classes.header}>
                                <img className={classes.imgNav} src={ID} alt='IconicDev'/>
                                <nav className={classes.itemHeight}>
                                        <Grid className={classes.navLink}>
                                            <Box className={classes.navBox}>
                                                <Box className={classes.hoverEffect}>
                                                    <Typography>
                                                        IconicDev
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className={classes.navBox}>
                                                <Box className={classes.hoverEffect}>
                                                    <Typography>
                                                        Services
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className={classes.navBox}>
                                                <Box className={classes.hoverEffect}>
                                                    <Typography>
                                                        Portfolio
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                </nav>
                                <Typography>Contact</Typography>
                            </div>
                                
                        </header>
                    <Grid className={classes.bienvenueContainer}>
                        <div>
                            <Box display="flex" justifyContent="center" m={1} p={1} >
                                <Box className={classes.imgdim}>
                                    <Tilt className="Tilt br2" options={{ max : 100 }} >
                                        <img className="imglog" src={ID} alt="logo"/>
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
                                    <img className={classes.itemImg} src={Code} alt=''/>
                                    <Box>
                                        <Typography style={{fontSize: 10}}>
                                            Developpement Web
                                        </Typography>
                                        <Typography style={{fontSize: 20}}>
                                            Site Internet
                                        </Typography>
                                        <Typography style={{fontSize: 12}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur. 
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid className={classes.itemBox}>
                                    <img className={classes.itemImg} src={Gra} alt=''/>
                                    <Box>
                                        <Typography style={{fontSize: 10}}>
                                            Image de marque
                                        </Typography>
                                        <Typography style={{fontSize: 20}}>
                                            Conception Graphique
                                        </Typography>
                                        <Typography style={{fontSize: 12}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur. 
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid className={classes.itemBox}>
                                    <img className={classes.itemImg} src={Lap} alt=''/>
                                    <Box>
                                        <Typography style={{fontSize: 10}}>
                                            Soutien
                                        </Typography>
                                        <Typography style={{fontSize: 20}}>
                                            Bureautique
                                        </Typography>
                                        <Typography style={{fontSize: 12}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur. 
                                        </Typography>
                                    </Box>
                                </Grid>
                                
                                <Grid className={classes.itemContainer2} container justify="center">
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={SEO} alt=''/>
                                        <Box className={classes.itemFont}>
                                            <Typography style={{fontSize: 10}}>
                                                Optimisation
                                            </Typography>
                                            <Typography style={{fontSize: 20}}>
                                                Performances
                                            </Typography>
                                            <Typography style={{fontSize: 12}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={Fly} alt=''/>
                                        <Box>
                                            <Typography style={{fontSize: 10}}>
                                                Support graphique
                                            </Typography>
                                            <Typography style={{fontSize: 20}}>
                                                Communication
                                            </Typography>
                                            <Typography style={{fontSize: 12}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit convallis efficitur. 
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid className={classes.itemBox}>
                                        <img className={classes.itemImg} src={Set} alt=''/>
                                        <Box>
                                            <Typography style={{fontSize: 10}}>
                                                Maintenance
                                            </Typography>
                                            <Typography style={{fontSize: 20}}>
                                                Accompagnement
                                            </Typography>
                                            <Typography style={{fontSize: 12}}>
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
                        <Iconic/>
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}

export default withStyles(useStyles)(Landing);