import React from 'react';
import './App.css';
//component
import Main from './components/Home/Home';


//material UI
import { makeStyles } from '@material-ui/core/styles';


//assets
import HTB from './assets/img/HTB.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: 0,
    gridAutoRows: 'auto',
    textAlign: 'center',
    backgroundImage: `url(${HTB})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  layer: {
    width: '100%',
    height: '100%',
    gridColumn: 1 ,
    gridRow: 1,
    backgroundColor: 'rgba(56, 49, 91, 0.9)',
  },
  imgdim: {
    width: "33%",
  },
  btn: {
    marginTop: 100,
    backgroundColor: '#080C59',
    color: '#A6127E',
    '&:hover': {
      backgroundColor: '#A6127E',
      color: '#080C59',
    }
  },
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.layer}>
        <Main/>
      </div>
     
    </div>
  );
}

export default App;
