import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter as Router } from 'react-router-redux'

import configureStore from './store/configureStore'
import App from './app'

import "./sass/base.scss";

const history = createHistory();
const store = configureStore(history); // 路由的store*/

console.info(process.env, __DEVTOOLS__);

render((
    <Provider store={store}>
        <div className="devtools">
            <Router history={history}>
                <App/>
            </Router>
        </div>
    </Provider>
), document.getElementById('root'));
