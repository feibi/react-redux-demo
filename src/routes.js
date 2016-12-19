import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import App from './containers/index'
import About from './containers/about/'
import FindRoom from './containers/findRoom/'
import Welcome from './containers/welcome/'
import List from './containers/list/'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/contact" component={FindRoom}/>
        <Route path="/about" component={About}/>
        <Route path="/list" component={List}/>

    </Route>
)

export default routes
