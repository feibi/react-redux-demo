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
import DevTools from './containers/DevTools';

const store = configureStore(rootReducer)  // 路由的store*/

console.log(process.env,__DEVTOOLS__)
function createElements () {
    if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
        return (
            <DevTools />
        )
    }
}
const history = syncHistoryWithStore(hashHistory, store)
render(
    (
        <Provider store={store}>
            <div className="devtools">
                <Router history={history} routes={routes}/>
                {createElements()}
            </div>
        </Provider>
    ), document.getElementById('root')
)
