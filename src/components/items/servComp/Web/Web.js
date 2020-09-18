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
import Cloud from '../../../../assets/img/Cloud.jpg';


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
    backgroundImage: `url(${Cloud})`,
    backgroundSize: 'cover'
  },
  webcontainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    backgroundColor: 'transparent',
    gridGap: '5%',
  },
  vitrine: {
    gridColumn: 1,
    gridRow: 1,
    color: 'white',
    display: 'flex',
    justifyContent: 'center'
  },
  vitrineTxt: {
    width: '70%',
  },
  vitrineImg: {
    gridColumn: 2,
    gridRow: 1,
    position: 'relative',

  },
  vitImgCont: {
    width: '70%',
    height: '80%',
    borderRadius: '57% 43% 61% 39% / 50% 68% 32% 50% ',
    border: '8px solid #A6127E',
  },
  vertical: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    msTransform: 'translateY(-50%)',
    transform: 'translateY(-50%)',
  },
  ecommerce: {
    gridColumn: 2,
    gridRow: 2,
    color: 'white'
  },
  ecommerceImg: {
    gridColumn: 1,
    gridRow: 2,
    position: 'relative',
  },
  institutionnel: {
    gridColumn: 1,
    gridRow: 3,
    color: 'white'
  },
  institutionnelImg: {
    gridColumn: 2,
    gridRow: 3,
    position: 'relative',
  },
  titre: {
    textAlign: 'right'
  },
  sousTitre: {
    textAlign: 'left',
  },
  txt: {
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%'
  },
}
);

class Web extends React.Component {



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.page}>
          <div className={classes.webcontainer}>
            <div className={classes.vitrine}>
              <div className={classes.vitrineTxt}>
                <Typography className={classes.titre} variant="h4">
                  Une Vitrine.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Quesqu'un site vitrine ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Un site vitrine est la première etape pour vous
                  créer une présence sur internet. Il vous permettra
                  d'augmenter votre visibilité, notament sur le web.
                  Afin d'optimiser votre présence en ligne,
                  cette vitrine doit offrir la possibilité à ses
                  visiteurs de connaitre votre activité,
                  de vous mettre en valeur, de vous contactez bien plus
                  encore sans vendre en ligne.
                  C'est donc un très bon support de communication
                  et d'informations pour vos potentiels
                  clients et/ou partenaires. On peut en deduire qu'une
                  vitrine est un bon support pour vous faire connaitre
                  a l'échelle locale et pourquoi pas national.
                  En résumé,un site vitrine est votre image sur internet.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Pour qui ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Cette solution est adapté a tout secteur d'activité.
                  Mais n'oublier pas que celui ne permet pas de vendre
                  en ligne !
                        </Typography>

              </div>
            </div>
            <div className={classes.vitrineImg}>
              <div className={classes.vertical}>
                <img className={classes.vitImgCont} src={WebGif} />
              </div>
            </div>
            <div className={classes.institutionnel}>
              <div className={classes.vitrineTxt}>
                <Typography className={classes.titre} variant="h4">
                  Un institutionnel.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Quesqu'un site vitrine ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Un site vitrine est la première etape pour vous
                  créer une présence sur internet. Il vous permettra
                  d'augmenter votre visibilité, notament sur le web.
                  Afin d'optimiser votre présence en ligne,
                  cette vitrine doit offrir la possibilité à ses
                  visiteurs de connaitre votre activité,
                  de vous mettre en valeur, de vous contactez bien plus
                  encore sans vendre en ligne.
                  C'est donc un très bon support de communication
                  et d'informations pour vos potentiels
                  clients et/ou partenaires. On peut en deduire qu'une
                  vitrine est un bon support pour vous faire connaitre
                  a l'échelle locale et pourquoi pas national.
                  En résumé,un site vitrine est votre image sur internet.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Pour qui ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Cette solution est adapté a tout secteur d'activité.
                  Mais n'oublier pas que celui ne permet pas de vendre
                  en ligne !
                        </Typography>

              </div>
            </div>
            <div className={classes.institutionnelImg}>
              <div className={classes.vertical}>
                <img className={classes.vitImgCont} src={AssoGif} />
              </div>

            </div>
            <div className={classes.ecommerce}>
              <div className={classes.vitrineTxt}>
                <Typography className={classes.titre} variant="h4">
                  Une Vitrine.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Quesqu'un site vitrine ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Un site vitrine est la première etape pour vous
                  créer une présence sur internet. Il vous permettra
                  d'augmenter votre visibilité, notament sur le web.
                  Afin d'optimiser votre présence en ligne,
                  cette vitrine doit offrir la possibilité à ses
                  visiteurs de connaitre votre activité,
                  de vous mettre en valeur, de vous contactez bien plus
                  encore sans vendre en ligne.
                  C'est donc un très bon support de communication
                  et d'informations pour vos potentiels
                  clients et/ou partenaires. On peut en deduire qu'une
                  vitrine est un bon support pour vous faire connaitre
                  a l'échelle locale et pourquoi pas national.
                  En résumé,un site vitrine est votre image sur internet.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Pour qui ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Cette solution est adapté a tout secteur d'activité.
                  Mais n'oublier pas que celui ne permet pas de vendre
                  en ligne !
                        </Typography>

              </div>
            </div>
            <div className={classes.ecommerceImg}>
              <div className={classes.vertical}>
                <img className={classes.vitImgCont} src={EcomGif} />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(Web);