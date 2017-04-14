import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/rooterReducer'

export default function configureStore(history) {
    let store;
    const router = routerMiddleware(history)
    if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
        const createLogger = require('redux-logger');
        // 调用日志打印方法
        const loggerMiddleware = createLogger();
        const DevTools = require('./../middleware/DevTools')
        // 创建一个中间件集合
        const middleware = [thunk]; //, loggerMiddleware
        store = compose(applyMiddleware(...middleware))(createStore);
    } else {
        store = compose(applyMiddleware(thunk))(createStore);
    }

    return store(rootReducer)
} 
