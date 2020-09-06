import React from 'react';

import Welcome from './BackAni';
import Landing from '../Landing';

//animation
import Zoom from 'react-reveal/Zoom'

class Main extends React.Component{
    constructor() {
        super();
            this.state = {
                toShow: 'Welcome',
            }
      }
    pages(event) {
        this.setState({toShow: 'Landing'})
    }
    render () {

        let manage;
        if (this.state.toShow === 'Welcome') {
        manage = <Zoom><Welcome buttonClick={this.pages.bind(this)}/></Zoom>
        } else if (this.state.toShow === 'Landing'){
            manage = <Landing/>
            }
        return (
            <div>
                {manage}
            </div>
        )
    }
}

export default Main;