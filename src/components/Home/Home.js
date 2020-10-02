import React from 'react';

//component
import Welcome from './BackAni';
import Landing from '../Landing';
import Services from '../items/services';
import Bac from '../items/Bac';
import Nav from '../Nav'

//rooter
import { BrowserRouter as Rooter, Route } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            toShow: 'Services',
        }
    }
    pages(event) {
        this.setState({ toShow: 'Landing' })
    }
    render() {


        return (
            <div>
                <Rooter>
                    <Nav className="navbar"/>
                    <Route path='/' exact component={Welcome}/>
                    <Route path='/IconicDev' exact component={Landing}/>
                    <Route path='/Services' exact component={Services}/>
                    <Route path='/Bac_a_Sable' exact component={Bac}/>
                </Rooter>
            </div>
        )
    }
}

export default Main;