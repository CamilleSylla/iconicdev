import React from 'react';

//component
import Welcome from './BackAni';
import Landing from '../Landing';
import Services from '../items/services'

//animation
import Zoom from 'react-reveal/Zoom'

class Main extends React.Component{
    constructor() {
        super();
            this.state = {
                toShow: 'Services',
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
            } else if (this.state.toShow === 'Services'){
                manage = <Services/>
                }
        return (
            <div>
                {manage}
            </div>
        )
    }
}

export default Main;