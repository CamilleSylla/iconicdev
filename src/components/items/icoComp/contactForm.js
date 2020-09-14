
import React from 'react'; 


//materialUi
import { Typography, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

//assets
import Cyber from '../../../assets/img/Cyberpunk.jpg';
const useStyles = theme => ({
    root: {
        width: '100%',
        backgroundImage: `url(${Cyber})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        marginTop: '5%',
      },
      center: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(56, 49, 91, 0.6)',
      },
      container: {
        padding: '5%',
        borderRadius: 15,
        width: '60%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 50,
        gridAutoRows: 'minmax(50px, auto)',
      },
      nom: {
        gridColumn: 1 ,
        gridRow: 1,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      prenom: {
        gridColumn: 2 ,
        gridRow: 1,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      ldv: {
        gridColumn: 1,
        gridRow: 2,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      ville: {
        gridColumn: 2,
        gridRow: 2,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      CodeP: {
        gridColumn: 2,
        gridRow: 3,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      Obj: {
        gridColumn: 1 ,
        gridRow: 4,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
      Mess: {
        gridColumn: 2,
        gridRow: 4,
        '& label.Mui-focused': {
            color: 'secondary',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'secondary',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'secondary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary',
            },
          },
      },
    }
  );
  

class Contactform extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root} container justify="center">
                <div className={classes.center}>
                    <div className={classes.container}>
                        
                        <TextField color="secondary" className={classes.nom} id="outlined-basic" label="Nom" variant="outlined" />
                        <TextField color="secondary" className={classes.prenom} id="outlined-basic" label="Prenom" variant="outlined" />
                        <TextField color="secondary" className={classes.ldv} id="outlined-basic" label="Libellé de voie" variant="outlined" />
                        <TextField color="secondary" className={classes.ville} id="outlined-basic" label="Ville/Commune" variant="outlined" />
                        <TextField color="secondary" className={classes.CodeP} id="outlined-basic" label="Code Postale" variant="outlined" />
                        
                        <TextField color="secondary" className={classes.Obj} id="outlined-basic" label="Objet du Message" variant="outlined" />
                        <TextField
                            className={classes.Mess}
                            color="secondary"
                            id="outlined-multiline-static"
                            label="Votre Message"
                            multiline
                            rows={4}
                            width='100%'
                            defaultValue=""
                            variant="outlined"
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Contactform)