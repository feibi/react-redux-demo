import React from 'react'
import { render } from 'react-dom'
// 引入redux
import { createStore, combineReducers, applyMiddleware ,compose} from 'redux'
import { Provider } from 'react-redux'
// 引入router
import { Router, hashHistory ,browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import configureStore from './configureStore'
import rootReducer from './reducers/rooterReducer'
import DevTools from './containers/DevTools';

const store = configureStore(rootReducer)  // 路由的store*/

const history = syncHistoryWithStore(hashHistory, store)
render(
  (
  <Provider store={store}>
    <div className="devtools">
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
  ), document.getElementById('root')
)
