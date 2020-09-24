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
    backgroundImage: `url(${servicesBG})`,
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
  Seo: {
    gridColumn: '5 /span 2',
    gridRow: 2,
    color: 'white',
    paddingTop: '50px',
    background: 'linear-gradient(180deg, rgba(8,12,89,0.7) 0%, rgba(33,37,79,0.7) 100%)',
  },
  SeoImg: {
    gridColumn: '1 / span 4',
    gridRow: 2,
    paddingTop: '50px',
    paddingBottom: '100px',
    width: '100%',
    background: 'linear-gradient(180deg, rgba(8,12,89,0.7) 0%, rgba(33,37,79,0.7) 100%)',
  },
  first: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '1 / span 2',
    gridRow: 3,
    backgroundColor: 'rgba(33, 37, 79, 0.7)'
  },
  seconde: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '3 / span 2',
    gridRow: 3,
    backgroundColor: 'rgba(33, 37, 79, 0.7)'
  },
  thired: {
    paddingTop: '50px',
    paddingBottom: '50px',
    gridColumn: '5 / span 2',
    gridRow: 3,
    backgroundColor: 'rgba(33, 37, 79, 0.7)'
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
                <div className={classes.vitrineTxt}>
                  <Typography className={classes.titre} variant="h4">
                    Vous accompagner dans la création d'une image sur le web
                        </Typography>
                  <Typography className={classes.sousTitre} variant="h6">
                    Etude & conception
                        </Typography>
                  <Typography className={classes.txt} variant="subtitle1">
                    Après une étude approfondis de vos besoins, une conception
                    respectant les standards web sera mise en place tout en
                    apportant un design individualiser. <br />Les technologies exploitées
                    permettent une persionnalisation maximal.<br />
                     IconicDev vous accompagnera et vous conseillera tout au long du projet.
                        </Typography>
                </div>
              </div>
              <div className={classes.vitrineImg}>
                <div className={classes.vertical}>
                  <img className={classes.vitImgCont} src={Website} />
                </div>
              </div>
              <div className={classes.Seo}>
                <div className={classes.vitrineTxt}>
                  <Typography className={classes.titre} variant="h4">
                    Augmenter votre visibilité grace au referencement
                        </Typography>
                  <Typography className={classes.sousTitre} variant="h6">
                    Optimisation du SEO
                        </Typography>
                  <Typography className={classes.txt} variant="subtitle1">
                    Le référencement est depuis quelque année un outil
                    inspensable pour la visibilité de votre site <br />
                    Un travail autours du type de référencement sera donc
                     etablie en fonction des objectifs du projets.<br />
                    Cela à pour but de mettre en avant votre projet une fois
                    en production et le faire apparaitre dans les premieres
                     places lors de recherches Google et donc de toucher le
                     plus de personnes possible !
                        </Typography>
                </div>
              </div>
              <div className={classes.SeoImg}>
                <div className={classes.vertical}>
                  <img className={classes.vitImgCont} src={SEOISO} />
                </div>
              </div>

              {/*Type de sites*/}
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
      </Fade>
    )
      
     
  }
}

export default withStyles(useStyles)(Web);