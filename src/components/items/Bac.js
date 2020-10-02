import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';


// component


const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridAutoRows: 'minmax(100vh, auto)',
    },
    window: {
        gridColumn: '2 / span 4',
        gridRow: 1,
        border: '2px solid white'
    },
    player: {
        width: '100%',
        height: '90%',
    },
    navigation: {
        width: '100%',
        height: '10%',
        background: 'red'
    },
}
);

class Bac extends React.Component {
    constructor() {
        super();
        this.state = {
          toShow: 'Click',
        }
      }
      toWeb(event) {
        this.setState({ toShow: 'Scale' })
      }
      toIdentite(event) {
        this.setState({ toShow: 'Some' })
      }
    render() {
        let Show;
    if (this.state.toShow === 'Scale') {
        Show = ''
    } else if (this.state.toShow === 'Click') {
        Show = ''
    } else if (this.state.toShow === 'Some') {
        Show = ''
    }
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.grid}>
                    <div className={classes.window}>
                        <div className={classes.player}>
                            {Show}
                        </div>
                        <div className={classes.navigation}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(useStyles)(Bac);