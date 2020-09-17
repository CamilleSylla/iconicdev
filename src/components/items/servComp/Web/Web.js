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


const useStyles = theme => ({
    root: {
        width: '100%',
        height: '100vh'
      },
      page: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      webcontainer:{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        backgroundColor: '#D9D9D9',
        gridGap: '5%',
      },
      vitrine:{
        gridColumn: 1 ,
        gridRow: 1,
        color: 'white'
      },
      vitrineImg:{
        width:'100%',
        gridColumn: 2 ,
        gridRow: 1,
      },
      vitImgCont:{
        width: '80%',
        height: '100%',
        borderRadius: '57% 43% 61% 39% / 50% 68% 32% 50% ',
        border: '8px solid #A6127E',
      },
      ecommerce:{
        gridColumn: 2 ,
        gridRow: 2,
        color: 'white'
      },
      ecommerceImg:{
        gridColumn: 1 ,
        gridRow: 2,
      },
      institutionnel:{
        gridColumn: 1 ,
        gridRow: 3,
        color: 'white'
      },
      institutionnelImg:{
        gridColumn: 2 ,
        gridRow: 3,
      },

    }
  );

class Web extends React.Component {



    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.page}>
                    <div className={classes.webcontainer}>
                      <div className={classes.vitrine}>
                        <Typography variant="h4">
                          Une Vitrine ?
                        </Typography>
                        <Typography variant="p">
                        Exploitez la puissance numérique pour décupler votre 
                        visibilité et votre notoriété, grâce à un site qui 
                        présentera votre activité, mettra en valeur votre 
                        entreprise et ses atouts, et permettra à votre public,
                         vos clients, vos partenaires ou vos fournisseurs de savoir
                          comment vous contacter facilement.
                        </Typography>
                      </div>
                      <div className={classes.vitrineImg}>
                        <img className={classes.vitImgCont} src={WebGif}/>
                      </div>
                      <div className={classes.institutionnel}>
                        <Typography variant="h4">
                          Un Institutionnel ?
                        </Typography>
                        <Typography variant="p">
                        Exploitez la puissance numérique pour décupler votre 
                        visibilité et votre notoriété, grâce à un site qui 
                        présentera votre activité, mettra en valeur votre 
                        entreprise et ses atouts, et permettra à votre public,
                         vos clients, vos partenaires ou vos fournisseurs de savoir
                          comment vous contacter facilement.
                        </Typography>
                      </div>
                      <div className={classes.institutionnelImg}>
                        <img className={classes.vitImgCont} src={AssoGif}/>
                      </div>
                      <div className={classes.ecommerce}>
                      <Typography variant="h4">
                          Un E-Commerce ?
                        </Typography>
                        <Typography variant="p">
                        Exploitez la puissance numérique pour décupler votre 
                        visibilité et votre notoriété, grâce à un site qui 
                        présentera votre activité, mettra en valeur votre 
                        entreprise et ses atouts, et permettra à votre public,
                         vos clients, vos partenaires ou vos fournisseurs de savoir
                          comment vous contacter facilement.
                        </Typography>
                      </div>
                      <div className={classes.ecommerceImg}>
                        <img className={classes.vitImgCont} src={EcomGif}/>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Web);