import React from 'react'
import {render} from 'react-dom'
// 引入redux
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'

const browserHistory = createHistory()
// 引入router
//import {Router, hashHistory, browserHistory} from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


//import {ConnectedRouter as Router } from 'react-router-redux'
import App from './app'

import configureStore from './configureStore'
import rootReducer from './reducers/rooterReducer'
import "./sass/base.scss";


const history = createHistory()
const store = configureStore(rootReducer) // 路由的store*/

console.info(process.env, __DEVTOOLS__)

render((
    <Provider store={store}>
        <div className="devtools">
            <Router >
                <App/>
            </Router>
        </div>
    </Provider>
), document.getElementById('root'))
