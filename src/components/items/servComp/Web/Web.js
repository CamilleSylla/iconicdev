import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



//assets
import Website from '../../../../assets/img/Website.svg';
import SEOISO from '../../../../assets/img/SEOISO.svg';
import Vitrine from '../../../../assets/img/Vitrine.svg';
import Ecom from '../../../../assets/img/Ecom.svg';
import Puz from '../../../../assets/img/Puz.svg';
import servicesBG from '../../../../assets/img/servicesBG.png';

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
    backgroundImage: `url(${servicesBG})`,
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

  website: {
    width: '100%',
    gridColumn: '6 / span 4',
    gridRow: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },

  seo: {
    gridColumn: '6 / span 4',
    gridRow: 2,
    width: '100%',
    color: 'white',
    border: ' 2px solid white',
    boxShadow: '-30px 30px 0px 0px #21254F',
    webkitTransition: 'all 1s ease',
    mozTransition: 'all 1s ease',
    oTransition: 'all 1s ease',
    transition: 'all 1s ease',
    '&:hover': {
      boxShadow: '50px 50px 0px 0px #21254F',
      '& $title': {
        WebkitTextFillColor: 'transparent',
        textShadow: '0px -20px #A6127E, 0px 20px #21254F;',
        letterSpacing: ' 0.1em',
      }
    },
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
      gridRow: 2,
      boxShadow: '-20px 20px 0px 0px #21254F',
      '&:hover': {
        boxShadow: '20px 20px 0px 0px #21254F',
      }
    },
  },

  seoimg: {
    gridColumn: '2 / span 4',
    gridRow: 2,
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
    fontWeight: 'bold',
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
    fontSize: 25,
    fontFamily: 'Oswald, sans-serif'
  },
  txt: {
    textAlign: 'justify',
    letterSpacing: '0.1em',
    fontWeight: '700',
    fontFamily:'Oswald, sans-serif',
    marginLeft: '5%',
    marginRight: '5%',
  }
}
);

class Web extends React.Component {



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
                  <p className={classes.title}>
                    . Vous accompagner dans la création d'une image sur le web
                     </p>
                  <p className={classes.sousTitre}>
                    Etude & conception
                     </p>
                  <p className={classes.txt}>
                    Après une étude approfondis de vos besoins, une conception
                    respectant les standards web sera mise en place tout en
                    apportant un design individualiser.<br /><br /> Les technologies exploitées
                    permettent une persionnalisation maximal.<br /><br />
                     IconicDev vous accompagnera et vous conseillera tout au long du projet.
                     </p>
                </div>
                <img src={SEOISO} alt='web' className={classes.seoimg} />

                <div className={classes.seo}>
                  <p className={classes.title}>
                    . Augmenter votre visibilité grace au referencement
                     </p>
                  <p className={classes.sousTitre}>
                    Optimisation du SEO
                     </p>
                  <p className={classes.txt}>
                    Le référencement est depuis quelque année un outil
                    inspensable pour la visibilité de votre site <br /><br />
                    Un travail autours du type de référencement sera donc
                     etablie en fonction des objectifs du projets.<br /><br />
                    Cela à pour but de mettre en avant votre projet une fois
                    en production et le faire apparaitre dans les premieres
                     places lors de recherches Google et donc de toucher le
                     plus de personnes possible !
                  </p>
                </div>
                <img src={Website} alt='web' className={classes.website} />
                
                
                {/*Type de sites*/}

                
                <div className={classes.cardGrid}>
                  <div className={classes.first}>
                    <div className="container">
                      <a className="card1" >
                        <img src={Vitrine} className={classes.logW} />
                        <h3>Site Vitrine</h3>
                        <p className="small">
                          Idéale Pour promouvoir votre acitvité,
                          présenter vos produits ou encore
                        presentez votre entreprise</p>
                        <div className="go-corner" href="#">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={classes.seconde}>
                    <div className="container">
                      <a className="card1" >
                        <img src={Ecom} className={classes.logW} />
                        <h3>E-commerce</h3>
                        <p className="small">
                          Etendez vos possibilitées & augmentez votre CA et votre clientèle grasse
                                a une boutique en ligne </p>
                        <div className="go-corner" href="#">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={classes.thired}>
                    <div className="container">
                      <a className="card1" >
                        <img src={Puz} className={classes.logW} />
                        <h3>Site Instutionnel</h3>
                        <p className="small">
                          Communiquez facilement sur vos evenements vos engagement vos projets
                                a des fins non lucratives</p>
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

export default withStyles(useStyles)(Web);