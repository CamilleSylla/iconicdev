import React from 'react';
import './App.css';
//component
import Main from './components/Home/Home';



//material UI
import { makeStyles } from '@material-ui/core/styles';


//assets
import HTB from './assets/img/HTB.jpg'

import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap: 0,
    gridAutoRows: 'auto',
    textAlign: 'center',
    backgroundImage: `url(${HTB})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  layer: {
    display: 'block',
    width: '100%',
    height: '100%',
    gridColumn: 1 ,
    gridRow: 1,
    backgroundColor: 'rgba(56, 49, 91, 0.9)',
  },
  footer: {
    gridRow: 2,
  }
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.layer}>
        <Main/>
      </div>
      <Footer className={classes.footer}/>
    </div>
  );
}

export default App;
