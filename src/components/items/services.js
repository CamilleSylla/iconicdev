
import React from 'react';

//matterial Ui
import { withStyles } from '@material-ui/core/styles';

//component
import Web from './servComp/Web/Web';
import Identite from './servComp/Identite/Identite';
import VBA from './servComp/VBA/VBA';

//animation
import Zoom from 'react-reveal/Zoom'

const useStyles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
      },
    }
  );
class Services extends React.Component {
    constructor() {
        super();
            this.state = {
                toShow: 'Web',
            }
      }
    pages(event) {
        this.setState({toShow: 'Web'})
    }

    render () {

        let manage;
        if (this.state.toShow === 'Web') {
        manage = <Zoom><Web/></Zoom>
        } else if (this.state.toShow === 'Identite'){
            manage = <Identite/>
            } else if (this.state.toShow === 'VBA'){
                manage = <VBA/>
                }

        const {classes} = this.props;
        return (
            <div className={classes.root}>
                    {manage}
            </div>
        )
    }
}

export default withStyles(useStyles)(Services);