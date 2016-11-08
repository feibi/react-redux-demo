import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
//import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
//import DevTools from './containers/DevTools'



let configureStore
if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {

    const createLogger = require('redux-logger');
    // 调用日志打印方法
    const loggerMiddleware = createLogger()
    const DevTools = require('./containers/DevTools')
        // 创建一个中间件集合
    const middleware = [thunk, loggerMiddleware];
    configureStore = compose(
        applyMiddleware(...middleware),
        DevTools.instrument()
    )(createStore);
} else {
    configureStore = compose(
        applyMiddleware(thunk)
    )(createStore);
}

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用


export default configureStore
