import { createStore, applyMiddleware,compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from './containers/DevTools'


// 调用日志打印方法
const loggerMiddleware = createLogger()

// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware]

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const configureStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
)(createStore);

export default configureStore
