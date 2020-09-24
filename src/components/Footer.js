
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 250,
        backgroundColor: 'green'
    },
}
);

class Footer extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>

            </div>
        )
    }
}

export default withStyles(useStyles)(Footer)