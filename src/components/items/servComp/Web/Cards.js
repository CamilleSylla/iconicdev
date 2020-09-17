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
      banniereMenu:{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(225px, auto)',
        gridGap: '5%',
      },
      creationWebcont:{
        gridColumn: 1 ,
      },
      graphismecont:{
        gridColumn: 2 ,
      },
      vbacont:{
        gridColumn: 3 ,
      },
      cardsMenu: {
        background:'#080C59',
        width:'100%',
        height: '100%',
        color: 'white',
        webkitBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
        mozBoxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
        boxShadow: '0px 20px 30px 0px rgba(33, 35, 79, 1)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

      },
      cardsIcons: {
        width:'100%',
        height: '30%'
      },
      iconsSize:{
        width:'20%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        border: 0,
      },
      cardsText: {
        width:'100%',
        height: '45%'
      },
      cardBtn: {
        width:'100%',
        height: '25%',
        backgroundColor: '#A6127E',
        borderBottom: '4mm ridge rgb(170, 50, 220, .6)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      },
    }
  );

class CardsMenu extends React.Component {

    render () {
        const {classes} = this.props;
        console.log(this.props.onClick)
        return (
            <div className={classes.root}>
                      <div className={classes.banniereMenu}>
                        <div className={classes.creationWebcont}>
                          <div className={classes.cardsMenu}>
                              <div className={classes.cardsIcons}>
                                <img className={classes.iconsSize} src={Code} alt="logo"/>
                              </div>
                              <div className={classes.cardsText}>
                                <Typography variant="h6">
                                Conception <br/> Web
                                </Typography>
                              </div>
                              <div className={classes.cardBtn}>
                                <Button onClick={this.props.buttonClick}>
                                    Default
                                </Button>
                              </div>
                          </div>
                        </div>
                        <div className={classes.graphismecont}>
                          <div className={classes.cardsMenu}>
                            <div className={classes.cardsIcons}>
                              <img className={classes.iconsSize} src={Gra} alt="logo"/>
                            </div>
                            <div className={classes.cardsText}>
                              <Typography variant="h6">
                                Création<br/>Graphique
                              </Typography>
                            </div>
                            <div className={classes.cardBtn}>
                              <Typography variant="p">
                                  GO
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div className={classes.vbacont}>
                          <div className={classes.cardsMenu}>
                              <div className={classes.cardsIcons}>
                                <img className={classes.iconsSize} src={Lap} alt="logo"/>
                              </div>
                              <div className={classes.cardsText}>
                                <Typography variant="h6">
                                  Support<br/>Bureautique
                                </Typography>
                              </div>
                              <div className={classes.cardBtn}>
                                <Typography variant="p">
                                  GO
                                </Typography>
                              </div>
                          </div>
                        </div>
                      </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(CardsMenu);