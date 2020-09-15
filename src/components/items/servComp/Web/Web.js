import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto'
      },
      page: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridGap: 10,
        gridAutoRows: 'minmax(100px, auto)',
      },
      banniere: {
        gridRow: 1,
      },
    }
  );

class Web extends React.Component {



    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.page}>
                    <div className={classes.banniere}>
                        web
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Web);