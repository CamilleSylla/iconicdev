import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
//assets
import ID from '../assets/img/ID.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white'
  },
  nav: {
      display: 'inline-block'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },
  navImg: {
      width: '6%'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.navImg} src={ID} alt="IconicDev"/>
          <List className={classes.nav}  aria-label="main mailbox folders">
            <ListItem>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Inbox" />
            </ListItem>

          </List>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}