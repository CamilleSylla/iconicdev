
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';

//component
import Web from './servComp/Web/Web';
import Identite from './servComp/Identite/Identite';
import VBA from './servComp/VBA/VBA';
import CardsMenu from './servComp/Web/Cards';

//animation
import Fade from 'react-reveal/Fade'
import { Typography } from '@material-ui/core';

//assets
import ID from '../../assets/img/Idsvg.svg';

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  pageGrid: {
    width: '100%',
    display: 'grid',
    marginTop: 100,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    gridGap: '5%',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      marginTop: 0,
    },
  },
  cards: {
    gridColumn: 2,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 2,
    },
  },
  content: {
    gridColumn: '1 / span 2',
    gridRow: 2,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 3,
    },
  },
  center: {
    gridColumn: 1,
    gridRow: 1,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    
  },
  titleContainer: {
    width: '70%',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    
  },
  logo: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'block'
    },
  },
  cWeb: {
    letterSpacing: ' 0.1em',
    fontSize: 70,
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
}
);

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      toShow: 'Web',
    }
  }
  toWeb(event) {
    this.setState({ toShow: 'Web' })
  }
  toIdentite(event) {
    this.setState({ toShow: 'Identite' })
  }
  toVba(event) {
    this.setState({ toShow: 'VBA' })
  }
  render() {

    let services;
    let title;
    let desc;
    if (this.state.toShow === 'Web') {
      services = <Web />;
      title = 'Conception Web';
      desc ='Tous le monde (ou presque) possède un smartphone ou bien un ordinateur c\'est pourquoi IconicDev rendra votre site'
    } else if (this.state.toShow === 'Identite') {
      services = <Identite />;
      title = 'Création Graphique';
      desc ='Tous le monde (ou presque) possède un smartphone ou bien un ordinateur c\'est pourquoi IconicDev rendra votre site'
    } else if (this.state.toShow === 'VBA') {
      services = <VBA />;
      title = 'Support Bureautique';
      desc ='Tous le monde (ou presque) possède un smartphone ou bien un ordinateur c\'est pourquoi IconicDev rendra votre site'
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.pageGrid}>
          <Fade>
            
            <CardsMenu className={classes.cards}
              toWeb={this.toWeb.bind(this)}
              toIdentite={this.toIdentite.bind(this)}
              toVba={this.toVba.bind(this)}
              Status={this.state}

            />
            <div className={classes.center}>
              <div className={classes.titleContainer}>
              <img className={classes.logo} src={ID} alt="logo" />
                <span className={classes.cWeb}>
                  {title}
                                    </span>
                <Typography variant="subtitle1">
                  {desc}
                            </Typography>
              </div>
            </div>
          </Fade>

          <div className={classes.content}>
            {services}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Services);