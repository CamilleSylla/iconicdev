import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

//assets
import Code from '../../../../assets/img/Code.svg';
import Gra from '../../../../assets/img/Gra.svg';
import Lap from '../../../../assets/img/Lap.svg';

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  banniere: {
    gridColumn: 1,
    gridRow: 1,
    paddingBottom: '25%'
  },
  banniereMenu: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'minmax(300px, auto)',
    gridGap: '5%',
    marginTop: 50,
  },
  creationWebcont: {
    gridColumn: 1,
  },
  graphismecont: {
    gridColumn: 2,
  },
  vbacont: {
    gridColumn: 3,
  },
  cardsMenu: {
    background: 'Transparent',
    width: '100%',
    height: '100%',
    color: 'white',
    webkitBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
    mozBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
    boxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
  },
  cardsIcons: {
    width: '100%',
    height: '30%',
  },
  iconsSize: {
    marginTop: '30%',
    width: '20%',
    padding: 10,
    border: 0,
  },
  cardsText: {
    width: '100%',
    height: '45%'
  },

  cardBtn: {
    width: '100%',
    height: '25%',
    backgroundColor: 'transparent',
  },

  //active cards

  cardsMenuActive: {
    background: 'linear-gradient(180deg, transparent 0%, rgba(33,37,79,1) 20%)',
    width: '100%',
    height: '100%',
    color: 'white',
    webkitBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
    mozBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
    boxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
  },

  cardBtnActive: {
    width: '100%',
    height: '25%',
    backgroundColor: '#A6127E',
    borderBottom: '4mm ridge rgb(170, 50, 220, .6)',
  },
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
          </div>
          <div className={classes.cardBtnActive} onClick={this.props.toWeb}>
            Default
            </div>
        </div>

      Graph =

        <div className={classes.cardsMenu}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Gra} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Création<br />Graphique
                    </Typography>
          </div>
          <div className={classes.cardBtn} onClick={this.props.toIdentite} >
            Default
        </div>
        </div>


      VBA = <div className={classes.cardsMenu}>
        <div className={classes.cardsIcons}>
          <img className={classes.iconsSize} src={Lap} alt="logo" />
        </div>
        <div className={classes.cardsText}>
          <Typography variant="body1">
            Support<br />Bureautique
            </Typography>
        </div>
        <div className={classes.cardBtn} onClick={this.props.toVba}>
          Default
        </div>
      </div>

    } else if (this.props.Status.toShow === 'Identite') {
      Web =

        <div className={classes.cardsMenu}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Code} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Conception <br /> Web
                      </Typography>
          </div>
          <div className={classes.cardBtn} onClick={this.props.toWeb}>
            Default
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
          </div>
          <div className={classes.cardBtnActive} onClick={this.props.toIdentite} >
            Default
        </div>
        </div>


      VBA = <div className={classes.cardsMenu}>
        <div className={classes.cardsIcons}>
          <img className={classes.iconsSize} src={Lap} alt="logo" />
        </div>
        <div className={classes.cardsText}>
          <Typography variant="body1">
            Support<br />Bureautique
            </Typography>
        </div>
        <div className={classes.cardBtn} onClick={this.props.toVba}>
          Default
        </div>
      </div>
    } else if (this.props.Status.toShow === 'VBA') {
      Web =

        <div className={classes.cardsMenu}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Code} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Conception <br /> Web
                      </Typography>
          </div>
          <div className={classes.cardBtn} onClick={this.props.toWeb}>
            Default
            </div>
        </div>

      Graph =

        <div className={classes.cardsMenu}>
          <div className={classes.cardsIcons}>
            <img className={classes.iconsSize} src={Gra} alt="logo" />
          </div>
          <div className={classes.cardsText}>
            <Typography variant="body1">
              Création<br />Graphique
                    </Typography>
          </div>
          <div className={classes.cardBtn} onClick={this.props.toIdentite} >
            Default
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
        </div>
        <div className={classes.cardBtnActive} onClick={this.props.toVba}>
          Default
        </div>
      </div>
    }



    return (
      <div className={classes.root}>
        <div className={classes.banniereMenu}>
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