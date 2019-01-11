import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu/MainMenu';
import Dash from './components/Dash/Dash';
import Log from './components/Log/Log';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop';

import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import Show from './components/Show/Show';


export default (
   <Switch>
      <Route exact path ='/' component={Dash}/>
      <Route  path ='/log' component={Log}/>
      <Route  path ='/land' component={Landing}/>
      <Route  path ='/products' component={Products}/>
      <Route  path ='/shop' component={Shop}/>

      <Route  path ='/main' component={MainMenu}/>
      <Route  path ='/search' component={Search}/>
      <Route  path ='/cart' component={Cart}/>
      <Route  path ='/show' component={Show}/>


   </Switch>
)

