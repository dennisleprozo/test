import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';
import Dash from './components/Dash/Dash';
import Log from './components/Log/Log';
import Landing from './components/Landing/Landing';
import Men from './components/Men/Men';



export default (
   <Switch>
      <Route exact path ='/' component={Dash}/>
      <Route  path ='/log' component={Log}/>
      <Route  path ='/land' component={Landing}/>
      <Route  path ='/men' component={Men}/>
      <Route  path ='/main' component={MainMenu}/>
   </Switch>
)

