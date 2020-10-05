import React from 'react';

//material Ui
import { withStyles } from '@material-ui/core/styles';


//assets

import OPFlyer from '../../assets/img/OPFlyer.png';
import OP from '../../assets/img/OPMockup.png';
import OPCarte from '../../assets/img/OPCarte.png';
import OPLog from '../../assets/img/OPLog.svg';


const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
    },
    grid: {
        display: 'grid',
        marginTop: '100px',
        marginBottom: '100px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: 'minmax(auto, auto)',
    },
    window: {
        gridColumn: 1,
        gridRow: 1,
        marginLeft: 20,
        marginTop: '25%',
        webkitTransition: 'all 2s ease',
        mozTransition: 'all 2s ease',
        oTransition: 'all 2s ease',
        transition: 'all 2s ease',
    },
    window2: {
        gridColumn: 2,
        gridRow: 1,
        webkitTransition: 'all 2s ease',
        mozTransition: 'all 2s ease',
        oTransition: 'all 2s ease',
        transition: 'all 2s ease',
    },
    window3: {
        gridColumn: 3,
        gridRow: 1,
        webkitTransition: 'all 2s ease',
        mozTransition: 'all 2s ease',
        oTransition: 'all 2s ease',
        transition: 'all 2s ease',
    },
    window4: {
        gridColumn: 4,
        gridRow: 1,
        position: 'relative',
    },
    mockup: {
        width: '100%',
    },
    center: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
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
                    <div className={classes.window} >
                        <img src={OPLog} className={classes.mockup} style={{width: '65%'}} />
                    </div>
                    <div className={classes.window2} >
                        <img src={OP} className={classes.mockup} />
                    </div>
                    <div className={classes.window3}>
                        <img src={OPFlyer} className={classes.mockup} />
                    </div>
                    <div className={classes.window4}>
                        <div className={classes.center}>
                            <img src={OPCarte} className={classes.mockup} style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(useStyles)(Bac);