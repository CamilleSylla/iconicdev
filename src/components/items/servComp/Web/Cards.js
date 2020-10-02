import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

//assets
import Code from '../../../../assets/img/Code.svg';
import Gra from '../../../../assets/img/Gra.svg';
import Lap from '../../../../assets/img/Lap.svg';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  banniere: {
    gridColumn: 1,
    gridRow: 1,
    paddingBottom: '25%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0%',
      justifyContent: 'center'
    },
  },
  banniereMenu: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'minmax(300px, auto)',
    gridColumnGap: '15%',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(auto, auto)',
      gridColumnGap: '5%',
    },
  },
  creationWebcont: {
    gridColumn: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 1,
    },
  },
  graphismecont: {
    gridColumn: 2,
    [theme.breakpoints.down('md')]: {
      gridColumn: 2,
      gridRow: 1,
    },
  },
  vbacont: {
    gridColumn: 3,
    [theme.breakpoints.down('md')]: {
      gridColumn: 3,
      gridRow: 1,
    },
  },
  cardsMenu: {
    width: '100%',
    padding: 10,
    color: 'white',
    webkitTransition: 'all .3s ease',
    mozTransition: 'all .3s ease',
    oTransition: 'all .3s ease',
    transition: 'all .3s ease',
    border: '3px solid transparent',
    '&:hover': {
      color: 'white',
      boxShadow: '10px 10px 0px 0px #21254F',
      border: '3px solid white',
      '& $arrow': {
        borderRadius: 20,
        backgroundColor: '#21254F',
      },
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      width: 'auto',
      '&:hover': {
        color: 'white',
        border: '3px solid white',
        boxShadow: '0px 0px 0px 0px #21254F',
      },
  },

  },
  arrow: {
    marginTop: '20%',
    border: '2px solid white',
    padding: 5,
    borderRadius: 10,
    webkitTransition: 'all .7s ease',
    mozTransition: 'all .7s ease',
    oTransition: 'all .7s ease',
    transition: 'all .7s ease',
    [theme.breakpoints.down('md')]: {
      marginTop: '5%',
  },
  },
  cardsIcons: {
    width: '100%',
    height: '30%',
  },
  iconsSize: {
    marginTop: '30%',
    width: '35%',
    border: 0,
    [theme.breakpoints.down('md')]: {
      marginTop: '5%',
      width: '30%',
  },
  },
  cardsText: {
    marginTop: '20%',
    width: '100%',
    height: '45%',
    [theme.breakpoints.down('md')]: {
      marginTop: '5%',
      height: '10%',
  },
  },

  cardBtn: {
    width: '50%',
    height: '25%',
    backgroundColor: 'transparent',
    borderRadius: 50,
    backgroundColor: 'pink',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      height: '10%',
  },
  },

  //active cards

  cardsMenuActive: {
    width: '100%',
    padding: 10,
    color: 'white',
    webkitTransition: 'all .3s ease',
    mozTransition: 'all .3s ease',
    oTransition: 'all .3s ease',
    transition: 'all .3s ease',
    boxShadow: '10px 10px 0px 0px #A6127E',
    border: '3px solid white',
    [theme.breakpoints.down('md')]: {
      padding: 0,
      width: 'auto',
      boxShadow: '0px 0px 0px 0px #A6127E',
  },
  },

  cardBtnActive: {
    width: '100%',
    height: '25%',
    backgroundColor: '#A6127E',
    borderBottom: '4mm ridge rgb(170, 50, 220, .6)',
    [theme.breakpoints.down('md')]: {
      height: '10%',
  },
  },
  IdStatus: {
    marginTop: '20%',
    [theme.breakpoints.down('md')]: {
      marginTop: '5%',
  },
  }
}
);

class CardsMenu extends React.Component {



  render() {


    const { classes } = this.props;

    let Web;
    let Graph;
    let VBA;

    if (this.props.Status.toShow === 'Web') {
      Web =

        <div className={classes.cardsMenuActive}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Code} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Conception <br /> Web
                      </Typography>
            <VisibilityIcon className={classes.IdStatus} />
          </div>
        </div>

      Graph =

        <div className={classes.cardsMenu} onClick={this.props.toIdentite}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Gra} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Création<br />Graphique
                    </Typography>
            <ArrowDownwardIcon className={classes.arrow} />
          </div>
        </div>


      VBA = <div className={classes.cardsMenu} onClick={this.props.toVba}>
        <div className={classes.cardsIcons}>
          <img className={classes.iconsSize} src={Lap} alt="logo" />
        </div>
        <div className={classes.cardsText}>
          <Typography variant="body1">
            Support<br />Bureautique
            </Typography>
          <ArrowDownwardIcon className={classes.arrow} />
        </div>
      </div>

    } else if (this.props.Status.toShow === 'Identite') {
      Web =

        <div className={classes.cardsMenu} onClick={this.props.toWeb}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Code} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Conception <br /> Web
                      </Typography>
            <ArrowDownwardIcon className={classes.arrow} />
          </div>
        </div>

      Graph =

        <div className={classes.cardsMenuActive}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Gra} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Création<br />Graphique
                    </Typography>
            <VisibilityIcon className={classes.IdStatus} />
          </div>
        </div>


      VBA = <div className={classes.cardsMenu} onClick={this.props.toVba}>
        <div className={classes.cardsIcons}>
          <img className={classes.iconsSize} src={Lap} alt="logo" />
        </div>
        <div className={classes.cardsText}>
          <Typography variant="body1">
            Support<br />Bureautique
            </Typography>
          <ArrowDownwardIcon className={classes.arrow} />
        </div>
      </div>
    } else if (this.props.Status.toShow === 'VBA') {
      Web =

        <div className={classes.cardsMenu} onClick={this.props.toWeb}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Code} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Conception <br /> Web
                      </Typography>
            <ArrowDownwardIcon className={classes.arrow} />
          </div>
        </div>

      Graph =

        <div className={classes.cardsMenu} onClick={this.props.toIdentite}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Gra} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Création<br />Graphique
                    </Typography>
            <ArrowDownwardIcon className={classes.arrow} />
          </div>
        </div>


      VBA = <div className={classes.cardsMenuActive}>
        <div className={classes.cardsIcons}>
          <img className={classes.iconsSize} src={Lap} alt="logo" />
        </div>
        <div className={classes.cardsText}>
          <Typography variant="body1">
            Support<br />Bureautique
            </Typography>
          <VisibilityIcon className={classes.IdStatus} />
        </div>
      </div>
    }



    return (
      <div className={classes.root} >
        <div className={classes.banniereMenu} container justify="center">
          <div className={classes.creationWebcont}>
            {Web}
          </div>
          <div className={classes.graphismecont}>
            {Graph}
          </div>
          <div className={classes.vbacont}>
            {VBA}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(CardsMenu);