import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import qhistory from 'qhistory'
import {stringify, parse} from 'qs'
import {ConnectedRouter as Router} from 'react-router-redux'
import {AppContainer} from 'react-hot-loader';

import configureStore from './store/configureStore'
import App from './app'

import "./sass/base.scss";

const browserHistory = createHistory();
const history = qhistory(browserHistory, stringify, parse);
const store = configureStore(history); // 路由的store*/

console.info(process.env, __DEVTOOLS__);

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    </AppContainer>
  ), document.getElementById('root'))
};

render();

if (module.hot) {
  module.hot.accept('./app', () => {
    render()
  });
}
