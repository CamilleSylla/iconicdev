import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



//assets
import VB from '../../../../assets/img/VBA.svg';
import Cal from '../../../../assets/img/Cal.svg';
import Biff from '../../../../assets/img/Biff.svg';
import Data from '../../../../assets/img/Data.svg';
import Office from '../../../../assets/img/Office.jpg';


const useStyles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
  },
  page: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    
  },
  webcontainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    backgroundImage: `url(${Office})`,
    backgroundSize: 'cover'
    
  },
  vitrine: {
    gridColumn: '1 /span 2',
    gridRow: 1,
    paddingTop: 100,
    color: 'white',
    paddingTop: '50px',
    background: 'linear-gradient(180deg, rgba(166,18,126,0.7) 0%, rgba(8,12,89,0.7) 100%)',
  },
  vitrineTxt: {
    marginLeft: '15%',
    marginRight: '15%'
  },
  vitrineImg: {
    gridColumn: '3 / span 4',
    gridRow: 1,
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(166,18,126,0.7) 0%, rgba(8,12,89,0.7) 100%)',

  },
  vitImgCont: {
    width: '50%',
  },
  first: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '1 / span 2',
    gridRow: 2,
    background: 'linear-gradient(180deg, rgba(8,12,89,0.7) 0%, rgba(33,37,79,0.7) 100%)'
  },
  seconde: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '3 / span 2',
    gridRow: 2,
    background: 'linear-gradient(180deg, rgba(8,12,89,0.7) 0%, rgba(33,37,79,0.7) 100%)'
  },
  thired: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '5 / span 2',
    gridRow: 2,
    background: 'linear-gradient(180deg, rgba(8,12,89,0.7) 0%, rgba(33,37,79,0.7) 100%)'
  },
  logW: {
width: '20%'
  },
  titre: {
    textAlign: 'justify',
    marginBottom: '5%'
  },
  sousTitre: {
    textAlign: 'left',
    marginBottom: '5%'
  },
  txt: {
    textAlign: 'justify',
  },
}
);

class VBA extends React.Component {



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.page}>
          <div className={classes.center} >
            <div className={classes.webcontainer}>

              {/*Arguments*/}
              <div className={classes.vitrine}>
                <div className={classes.vitrineTxt}>
                  <Typography className={classes.titre} variant="h4">
                    Automatisez vos tache bureautique quotidienne !
                        </Typography>
                  <Typography className={classes.sousTitre} variant="h6">
                    Macro Pour vous simplifier la vie.
                        </Typography>
                  <Typography className={classes.txt} variant="subtitle1">
                    IconicDev peut facilté certaines de vos taches bureautique quotidienne. 
                    Il est possible de creer des micro programme dans des applications comme
                    Excel ou encore Google Sheets<br />
                    Un gain de temps sur le court/moyen/long terme assuré<br />
                    Ameliorer votre productivité ou celle des vos employés 
                        </Typography>
                </div>
              </div>
              <div className={classes.vitrineImg}>
                <div className={classes.vertical}>
                  <img className={classes.vitImgCont} src={VB} />
                </div>
              </div>

              {/*Type de sites*/}
                <div className={classes.first}>
                  <div className="container">
                    <a className="card1" >
                      <img src={Cal} className={classes.logW}/>
                      <h3>Planning</h3>
                      <p className="small">
                        Organisez vos semaines simplement, rapidement et efficacement tout 
                        coordonnant vos equipes</p>
                      <div className="go-corner" href="#">
                      </div>
                    </a>
                  </div>
                </div>
                <div className={classes.seconde}>
                    <div className="container">
                        <a className="card1" >
                        <img src={Biff} className={classes.logW}/>
                            <h3>Facturation</h3>
                            <p className="small">
                                Vous desirer augmenter les
                                 chances de reussite de votre evenement
                                 en impactant directement le publique</p>
                            <div className="go-corner" href="#">
                            </div>
                        </a>
                    </div>
                </div>
                <div className={classes.thired}>
                    <div className="container">
                        <a className="card1" >
                        <img src={Data} className={classes.logW}/>
                            <h3>Gestion de donnée interne</h3>
                            <p className="small">
                                En quelque sorte la pièce d'identité 
                                de votre organisation. Idéale pour
                                communiqué sans encombré</p>
                            <div className="go-corner" href="#">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(VBA);
