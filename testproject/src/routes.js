import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';
import Dash from './components/Dash/Dash';
import Log from './components/Log/Log';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';


export default (
   <Switch>
      <Route exact path ='/' component={Dash}/>
      <Route  path ='/log' component={Log}/>
      <Route  path ='/land' component={Landing}/>
      <Route  path ='/products' component={Products}/>
      <Route  path ='/main' component={MainMenu}/>
      <Route  path ='/search' component={Search}/>
      <Route  path ='/cart' component={Cart}/>


   </Switch>
)

