import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


// assets
import Web from '../../assets/img/Web.svg'
    //domaine
        //icons
import Dev from '../../assets/img/svg/Dev.svg'
import Draw from '../../assets/img/Draw.svg'
import VBA from '../../assets/img/svg/VBA.svg'
            //img
import Keyboard from '../../assets/img/Keyboard.jpg'
import Graph from '../../assets/img/Graph.jpg'
import Ex from '../../assets/img/Ex.jpg'
const useStyles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
    banniere: {
        marginTop: 100,
        width: '90%',
        height: 'auto',
        display: 'inline-flex'
    },
    banniereItem1:{
        width: '40%',
        height: '100%',
        position: 'relative',
    },
    verticalCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    banniereItem2:{
        width: '60%',
        height: '100%',
    },
    missionTitle: {
        marginTop: 100,
        background: "-webkit-linear-gradient(#080C59, #A1627E)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginLeft: '15%',
        marginRight: '15%',
        textAlign: 'right'
    },
    missionTypo: {
        background: "-webkit-linear-gradient(#080C59, #A1627E)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginLeft: '15%',
        marginRight: '15%',
        textAlign: 'justify',
    },
    webImg: {
        width: '50%',
    },
    domImg: {
        width: '40%',
    },
    domaine: {
        marginTop: 100,
        width: '90%',
        height: 'auto',
        display: 'inline-flex'
    },
    domaineTitle: {
        marginTop: 100,
        background: "-webkit-linear-gradient(#080C59, #A1627E)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginLeft: '15%',
        marginRight: '15%',
        textAlign: 'left'
    },
    dev: {
        width: 'auto',
        height: 300,
        backgroundImage: `url(${Keyboard})`,
        backgroundSize: 'cover',
        opacity: 0.4,
    },
    layer1: {
        backgroundColor: '#A6127E',
        height: '100%',
    },
    bckCol1: {
        backgroundColor: '#080C59',
        width: '35%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    
    graph:{
        width: 'auto',
        height: 300,
        backgroundImage: `url(${Graph})`,
        backgroundSize: 'cover',
        opacity: 0.4,
    },
    layer2: {
        backgroundColor: '#7712a6',
        height: '100%',
    },
    bckCol2: {
        backgroundColor: '#A6127E',
        width: '35%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    ex:{
        width: 'auto',
        height: 300,
        backgroundImage: `url(${Ex})`,
        backgroundSize: 'cover',
        opacity: 0.4,
    },
    layer3: {
        backgroundColor: '#080C59',
        height: '100%',
    },
    bckCol3: {
        backgroundColor: '#7712a6',
        width: '35%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    }
  );

  const Mission = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ex augue. Sed sed tellus elit. Donec nec velit quis lectus tincidunt vehicula. Praesent eu quam ullamcorper, interdum libero eu, porttitor nisi. Aliquam tempor id sapien vitae interdum. Vivamus aliquet gravida semper. Nulla nunc ligula, tristique at fermentum vel, rutrum eget lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse commodo dui sit amet sagittis semper. Donec tincidunt nibh ac odio rutrum luctus. Mauris eget condimentum odio. Cras sodales malesuada erat, et condimentum augue pretium at. ';

class Iconic extends React.Component {

    render () {
        const {classes} = this.props;
         return (
            <Grid>
                <Box>
                    <Typography>
                        La solution pour vos projets Web
                    </Typography>
                </Box>
                <Typography className={classes.missionTitle} variant="h3">
                            .Mission
                </Typography>
                <Box className={classes.banniere}>
                    <Box className={classes.banniereItem1}>
                        <div className={classes.verticalCenter}>
                            <img className={classes.webImg} src={Web} />
                        </div>
                    </Box>
                    <Box className={classes.banniereItem2}>
                    
                    <Typography className={classes.missionTypo}>
                            {Mission}
                    </Typography>
                    </Box>
                </Box>
                <Typography className={classes.domaineTitle} variant="h3">
                            .Domaines
                </Typography>
                <Box className={classes.domaine}>
                    <Box className={classes.dev}>
                        <div className={classes.layer1}>
                            <Box className={classes.verticalCenter}>
                                <div className={classes.bckCol1}>
                                    <img className={classes.domImg} src={Dev} />
                                </div>  
                            </Box>
                        </div>
                    </Box>
                    <Box className={classes.graph}>
                        <div className={classes.layer2}>
                            <Box className={classes.verticalCenter}>
                                <div className={classes.bckCol2}>
                                    <img className={classes.domImg} src={Draw} />
                                </div> 
                            </Box>
                        </div>
                    </Box>
                    <Box className={classes.ex}>
                        <div className={classes.layer3}>
                            <Box className={classes.verticalCenter}>
                                <div className={classes.bckCol3}>
                                    <img className={classes.domImg} src={VBA} />
                                </div>
                            </Box>
                        </div>
                    </Box>
                </Box>
                
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Iconic);