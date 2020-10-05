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


//animation
import Fade from 'react-reveal/Fade'

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  page: {
    width: '100%',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Art})`,
    backgroundSize: 'cover',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(166,18,126,0.7) 0%, rgba(8,12,89,0.7) 100%)'
  },
  webcontainer: {
    width: '100%',
    marginTop: '100px',
    marginBottom: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridAutoRows: 'minmax(auto, auto)',
    gridGap: 100,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      marginLeft: '10%',
      marginRight: '10%'
    },
  },
  vitrine: {
    gridColumn: '2 / span 4',
    gridRow: 1,
    width: '100%',
    color: 'white',
    border: ' 2px solid white',
    boxShadow: '30px 30px 0px 0px #21254F',
    webkitTransition: 'all 1s ease',
    mozTransition: 'all 1s ease',
    oTransition: 'all 1s ease',
    transition: 'all 1s ease',
    '&:hover': {
      boxShadow: '-50px 50px 0px 0px #21254F',
      '& $title': {
        WebkitTextFillColor: 'transparent',
        textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
        letterSpacing: ' 0.1em',
      }
    },
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 1,
      boxShadow: '20px 20px 0px 0px #21254F',
      '&:hover': {
        boxShadow: '-20px 20px 0px 0px #21254F',
      }
    },
  },
  vitImgCont: {
    width: '100%',
    gridColumn: '6 / span 4',
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  cardGrid: {
    gridColumn: '1 / span 10',
    gridRow: 3,
    gridGap: 100,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'minmax(auto, auto)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridColumn: 1,
      gridRow: 3,
    },
  },
  first: {
    gridColumn: 1,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 1,
    },
  },
  seconde: {
    gridColumn: 2,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 2,
    },
  },
  thired: {
    gridColumn: 3,
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 3,
    },
  },
  logW: {
    width: '20%'
  },
  title: {
    marginLeft: '5%',
    letterSpacing: ' 0.1em',
    fontSize: 30,
    textTransform: 'uppercase',
    textAlign: 'left',
    WebkitTextFillColor: 'white',
    WebkitTextStroke: '1px',
    WebkitTextStrokeColor: 'white',
    textShadow: '7px 7px #ff1f8f, 14px 14px #21254F;',
    webkitTransition: 'all 0.5s ease',
    mozTransition: 'all 0.5s ease',
    oTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
      textAlign: 'center',
      WebkitTextStroke: '2px',
      textShadow: '0px 7px #ff1f8f, 0px 14px #21254F;',
      '&:hover': {
        textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
      },
    },
  },
  sousTitre: {
    textAlign: 'left',
    marginLeft: '5%',
    fontSize: 20,
  },
  txt: {
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%',
  }

}
);

class Identite extends React.Component {



  render() {
    const { classes } = this.props;
    return (
      <Fade bottom>
        <div className={classes.root}>
          <div className={classes.page}>
            <div className={classes.center} >
              <div className={classes.webcontainer}>

                {/*Arguments*/}
                <div className={classes.vitrine}>
                  <div className={classes.vitrineTxt}>
                    <p className={classes.title}>
                      Marquez les esprits !
                        </p>
                    <p className={classes.sousTitre}>
                      Identité graphique.
                        </p>
                    <p className={classes.txt}>
                      L'un des meilleurs moyens de ce faire connaitre est de concevoir
                      une chartre graphique pour guidé le coté artistique de vos futurs
                      contenues de communication. Celle-ci permet de vous faire reconnaitre
                      parmis vous concurrents grace a different facteur comme vos couleurs
                    , les typographies...<br /><br />
                    La conception de Logo, Flyer, Carte de viste...
                    doit aussi respecter ses regles afin d'optimisé l'impact de ceux-ci
                    apres de vos clients/evenements et potentiel futur clients/événements.<br /><br />
                    Elle doit aussi respecter les tendances actuelle pour etre dans l'air du temps.<br /><br />
                    Pour finir, cela s'adresse a tout type d'organisation
                        </p>
                  </div>
                </div>
                <img className={classes.vitImgCont} src={Comm} />


                {/*Type de Conception*/}

                <div className={classes.cardGrid}>
                  <div className={classes.first}>
                    <div className="container">
                      <a className="card1" >
                        <img src={Pizza} className={classes.logW} />
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
                        <img src={Flyer} className={classes.logW} />
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
                        <img src={Card} className={classes.logW} />
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
        </div>
      </Fade>

    )
  }
}

export default withStyles(useStyles)(Identite);