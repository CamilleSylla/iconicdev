import React from 'react';


//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
      },
      items: {
          display:  'inline-flex'
      },
      boxSizing: {
          marginTop: '5%',
          width: 150
      }
    }
  );

class Tech extends React.Component {

    render()  {

    const {classes} = this.props

         return (
            <Grid className={classes.root} container justify="center">
                <Grid className={classes.items}>
                <Box className={classes.boxSizing}>
                    Html
                </Box>
                <Box className={classes.boxSizing}>
                    CSS
                </Box>
                <Box className={classes.boxSizing}>
                    React
                </Box>
                <Box className={classes.boxSizing}>
                    Node
                </Box>
                <Box className={classes.boxSizing}>
                    Javascript
                </Box>
                <Box className={classes.boxSizing}>
                    PSql
                </Box>
                <Box className={classes.boxSizing}>
                    Wordpress
                </Box>
                <Box className={classes.boxSizing}>
                    VBA
                </Box>
                <Box className={classes.boxSizing}>
                    Adobe
                </Box>
                </Grid>
            </Grid>
         )
    }
}

export default withStyles(useStyles)(Tech)