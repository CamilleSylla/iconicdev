import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';


// assets
import Web from '../../assets/img/Web.svg'

const useStyles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
    banniere: {
        width: '90%',
        height: 400,
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
        background: "-webkit-linear-gradient(#080C59, #A1627E)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginLeft: '15%',
        marginRight: '15%',
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
                <Box className={classes.banniere}>
                    <Box className={classes.banniereItem1}>
                        <div className={classes.verticalCenter}>
                            <img className={classes.webImg} src={Web} />
                        </div>
                    </Box>
                    <Box className={classes.banniereItem2}>
                    <Typography className={classes.missionTitle} variant="h3">
                            Mission
                    </Typography>
                    <br/>
                    <Typography className={classes.missionTypo}>
                            {Mission}
                    </Typography>
                    </Box>
                </Box>
                
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Iconic);