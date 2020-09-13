import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

//animation
import CountUp from 'react-countup';


const useStyles = theme => ({
    root: {
        marginTop: '5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 10,
        gridAutoRows: 'minmax(100px, auto)',
        color: 'white',
        fontSize: 50,
      },
      one: {
        gridColumn: 1 ,
        gridRow: 1,
        backgroundColor: '#A6127E'
      },
      two:{
        gridColumn: 2 ,
        gridRow: 1,
        backgroundColor: 'pink'
      },
      three:{
        gridColumn: 3 ,
        gridRow: 1,
        backgroundColor: '#080C59'
      },
    }
  );

class Arg extends React.Component{

    render () {
        const {classes} = this.props
        return (

            <div className={classes.root}>
                <div className={classes.one}>
                    <CountUp 
                    end={100}
                    suffix="%"
                    duration={5}
                     />
                     <Typography> Adapter a votre besoin</Typography>
                </div>
                <div className={classes.two}>
                <CountUp 
                    end={100}
                    suffix="%"
                    duration={5}
                     /><Typography> Personalisable</Typography>
                </div>
                <div className={classes.three}>
                <CountUp 
                    end={100}
                    suffix="K+"
                    duration={5}
                     /><Typography>Lignes de codes</Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Arg)