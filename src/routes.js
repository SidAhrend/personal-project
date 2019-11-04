import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Contact from './Components/Contact/Contact';
import About from './Components/About-Us/About-Us';

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about-us' component={About}/>
    </Switch>
)