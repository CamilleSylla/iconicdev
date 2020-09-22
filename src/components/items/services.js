
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';

//component
import Web from './servComp/Web/Web';
import Identite from './servComp/Identite/Identite';
import VBA from './servComp/VBA/VBA';
import CardsMenu from './servComp/Web/Cards';

//animation
import Zoom from 'react-reveal/Zoom'
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    gridGap: '5%'
  },
  cards: {
    gridColumn: 2,
    gridRow: 1

  },
  content: {
    gridColumn: '1 / span 2',
    gridRow: 2,
  },
  center: {
    gridColumn: 1,
    gridRow: 1,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left'
  },
  titleContainer: {
    width: '70%',
    color: 'white',
  },
  logo: {
    width: '40%'
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
  pages(event) {
    this.setState({ toShow: 'Identite' })
    console.log(this.state)
  }

  render() {

    let services;
    if (this.state.toShow === 'Web') {
      services = <Web bttuonClick={this.pages.bind(this)} />
    } else if (this.state.toShow === 'Identite') {
      services = <Identite />
    } else if (this.state.toShow === 'VBA') {
      services = <VBA />
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.pageGrid}>
          <CardsMenu className={classes.cards}
            buttonClick={this.pages.bind(this)}
          />
          <div className={classes.center}>
            <div className={classes.titleContainer}>
              <img className={classes.logo} src={ID} alt="logo" />
              <Typography variant="h4">
                Creation Graphique
                            </Typography>
              <Typography variant="subtitle1">
                Tous le monde (ou presque) possède
                un smartphone ou bien un ordinateur c'est pourquoi IconicDev
                rendra votre site
                            </Typography>
            </div>
          </div>
          <div className={classes.content}>
            {services}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Services);