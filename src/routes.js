import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import App from './containers/index'
import About from './containers/about/'
import Contact from './containers/contact/'
import Welcome from './containers/welcome/'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute  component={Welcome}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
    </Route>
)

export default routes
