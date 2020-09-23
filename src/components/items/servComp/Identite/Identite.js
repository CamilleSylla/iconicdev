import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



//assets
import Comm from '../../../../assets/img/Comm.svg';
import Pizza from '../../../../assets/img/Pizza.svg';
import Flyer from '../../../../assets/img/Flyer.svg';
import Card from '../../../../assets/img/Card.svg';
import Art from '../../../../assets/img/Art.jpg';


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
    backgroundImage: `url(${Art})`,
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

class Identite extends React.Component {



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
                    Marquez les esprits !
                        </Typography>
                  <Typography className={classes.sousTitre} variant="h6">
                    Identité graphique.
                        </Typography>
                  <Typography className={classes.txt} variant="subtitle1">
                    L'un des meilleurs moyens de ce faire connaitre est de concevoir 
                    une chartre graphique pour guidé le coté artistique de vos futurs
                    contenues de communication. Celle-ci permet de vous faire reconnaitre
                    parmis vous concurrents grace a different facteur comme vos couleurs
                    , les typographies...<br />
                    La conception de Logo, Flyer, Carte de viste... 
                    doit aussi respecter ses regles afin d'optimisé l'impact de ceux-ci 
                    apres de vos clients/evenements et potentiel futur clients/événements.<br />
                    Elle doit aussi respecter les tendances actuelle pour etre dans l'air du temps.<br />
                    Pour finir, cela s'adresse a tout type d'organisation 
                    
                        </Typography>
                </div>
              </div>
              <div className={classes.vitrineImg}>
                <div className={classes.vertical}>
                  <img className={classes.vitImgCont} src={Comm} />
                </div>
              </div>

              {/*Type de sites*/}
                <div className={classes.first}>
                  <div className="container">
                    <a className="card1" >
                      <img src={Pizza} className={classes.logW}/>
                      <h3>Logo</h3>
                      <p className="small">
                        Permet de renforcer l'image de l'entreprise 
                        et favorise la reconnaissance de la marque</p>
                      <div className="go-corner" href="#">
                      </div>
                    </a>
                  </div>
                </div>
                <div className={classes.seconde}>
                    <div className="container">
                        <a className="card1" >
                        <img src={Flyer} className={classes.logW}/>
                            <h3>Flyer/Affiche</h3>
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
                        <img src={Card} className={classes.logW}/>
                            <h3>Carte de Visite</h3>
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

export default withStyles(useStyles)(Identite);