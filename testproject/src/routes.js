import React from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Dash from './Dash/Dash';
import Log from './Log/Log';
import Landing from './Landing/Landing';
import Men from './Men/Men'


export default (
   <Switch>
      <Route exact path ='/' component={Dash}/>
      <Route  path ='/log' component={Log}/>
      <Route  path ='/land' component={Landing}/>
      <Route  path ='/men' component={Men}/>
      <Route  path ='/main' component={MainMenu}/>
   </Switch>
)

