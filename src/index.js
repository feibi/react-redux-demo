import React from 'react'
import {render} from 'react-dom'
// 引入redux
import {Provider} from 'react-redux'
// 引入router
import {Router, hashHistory, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import routes from './routes'
import configureStore from './configureStore'
import rootReducer from './reducers/rooterReducer'
import "./sass/base.scss";
const store = configureStore(rootReducer) // 路由的store*/

console.info(process.env, __DEVTOOLS__)
function createElements() {
    if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
        const DevTools = require('./containers/DevTools');
        return (<DevTools key="devtools"/>)
    }
}
//         {createElements()}
const history = syncHistoryWithStore(hashHistory, store)
render((
    <Provider store={store}>
        <div className="devtools">
            <Router history={history} routes={routes}/>
        </div>
    </Provider>
), document.getElementById('root'))
