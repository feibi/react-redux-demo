import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import App from './containers/index'
import About from './containers/about/'
import FindRoom from './containers/findRoom/'
import Welcome from './containers/welcome/'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={FindRoom}/>
        <Route path="/contact" component={FindRoom}/>
        <Route path="/about" component={About}/>
    </Route>
)

export default routes
