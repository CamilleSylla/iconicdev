import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


//components
import CardsMenu from './Cards';

//assets
import WebGif from '../../../../assets/img/WebGif.gif';
import EcomGif from '../../../../assets/img/EcomGif.gif';
import AssoGif from '../../../../assets/img/AssoGif.gif';
import Space from '../../../../assets/img/Space.jpg';
import Website from '../../../../assets/img/Website.svg';
import SEOISO from '../../../../assets/img/SEOISO.svg';


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
    backgroundColor: 'transparent'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  webcontainer: {
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    backgroundColor: 'transparent',
  },
  vitrine: {
    gridColumn: '1 /span 2',
    gridRow: 1,
    color: 'white',
    paddingTop: '50px',
    backgroundColor: '#080C59',
    borderBottom: '10px dotted #A6127E'
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
    backgroundColor: '#A6127E',
    
  },
  vitImgCont: {
    width: '50%',
  },
  Seo: {
    gridColumn: '5 /span 2',
    gridRow: 2,
    color: 'white',
    paddingTop: '50px',
    backgroundColor: '#A6127E',
    borderTop: '10px dotted #080C59',
  },
  SeoImg: {
    gridColumn: '1 / span 4',
    gridRow: 2,
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '100%',
    backgroundColor: '#080C59',
  },
  titre: {
    textAlign: 'right',
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
      <div className={classes.root}>
        <div className={classes.page}>
          <div className={classes.center} >
            <div className={classes.webcontainer}>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Web);