import React from 'react';

//component
import Welcome from './BackAni';
import Landing from '../Landing';
import Services from '../items/services';
import ContactUs from '../items/icoComp/contactForm'
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
                    <Route path='/theLab' exact component={Bac}/>
                    <Route path='/Contact' exact component={ContactUs}/>
                </Rooter>
            </div>
        )
    }
}

export default Main;