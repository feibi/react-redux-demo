import React from 'react'
import { Route ,IndexRoute} from 'react-router'
import { render } from 'react-dom'

import App from './containers/app/index'
import About from './containers/about/'
import Contact from './containers/contact/'

const routes = (
  <Route path="/" >
    <IndexRoute component={App}/>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </Route>
)

export default routes
