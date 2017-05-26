import React from 'react'
import { Route, Switch } from 'react-router-dom'

import lazyLoad from './until/lazyLoadRoute'
import Welcome from './pages/welcome/'
import About from './pages/about/'
import Contact from './pages/contact/'
import List from './pages/list/'
import NoMatch from './pages/noMatch'

const Routes = ()=>(
  <Switch>
    <Route path="/" exact component={lazyLoad(Welcome)}/>
    <Route path="/contact" render={lazyLoad(Contact)}/>
    <Route path="/about" component={lazyLoad(About)}/>
    <Route path="/list" exact component={lazyLoad(List)}/>
    <Route path="/list/:id"  render={({match})=><div>{match.params.id}</div>}/>
    <Route component={lazyLoad(NoMatch)}/>
  </Switch>
);

export default Routes
