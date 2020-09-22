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
  center:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  webcontainer: {
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: 'minmax(100px, auto)',
    backgroundColor: 'transparent',
  },
  vitrine: {
    gridRow: 1,
    color: 'white',
    paddingTop: '50px',
  },
  vitrineTxt: {
marginLeft: '15%'
  },
  vitrineImg: {
    gridColumn: 2,
    gridRow: 1,
    position: 'relative',
    paddingTop: '50px',
  },
  vitImgCont: {
    width: '70%',
    height: '80%',
    borderRadius: '58% 42% 73% 27% / 60% 64% 36% 40%',
    border: '3px solid #A6127E',
  },
  ecommerce: {
    gridRow: 2,
    color: 'white',
    paddingTop: '50px',
  },
  ecommerceImg: {
    gridColumn: 2,
    gridRow: 2,
    position: 'relative',
    paddingTop: '50px',
  },
  institutionnel: {
    gridRow: 3,
    color: 'white',
    paddingTop: '50px',
  },
  institutionnelImg: {
    gridColumn: 2,
    gridRow: 3,
    position: 'relative',
    paddingTop: '50px',
  },
  titre: {
    textAlign: 'right'
  },
  sousTitre: {
    textAlign: 'left',
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
                  Communiquer
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  A la différence d'une site internet vitrine, un site institutionnel
                  est un site web dont la fonction essentielle n'est pas une fonction 
                  commerciale, mais une fonction de communication. Son objectif 
                  sera donc de présenter et de mettre en relation. On retrouvera par 
                  exemple les valeurs, les projets, les actions de votre organisation
                  qui seront mise en avant.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Pour qui ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  Comme son nom l'indique, les site web institutionnel sont 
                  très utilise pour representer des Administrations, mais aussi 
                  des Communes ou bien Association.
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
                  Un E-Commerce.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Exportez-vous vers le vente en ligne.
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  De nos jours, c'est prendre un temps d'avanaces. Un site e-commerce 
                  peut etre défini comme l'avenir des transactions. 
                  Il permet au consommateur de ne plus avoir a ce deplacer pour 
                  obtenir ce qu'il souhaite. Le vendeur quand a lui pourra
                  elever son chiffre d'affaire cela lui permettra aussi de faire
                  connaitre ses produits ce qui n'est pas negligeable.
                        </Typography>
                <Typography className={classes.sousTitre} variant="h6">
                  Pour qui ?
                        </Typography>
                <Typography className={classes.txt} variant="subtitle1">
                  L'ecommerce est un bonne outils si votre activité est de type vente,
                  location, reservation...
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
          
      </div>
    )
  }
}

export default withStyles(useStyles)(Web);