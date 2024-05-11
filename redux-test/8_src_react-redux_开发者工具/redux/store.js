
// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件服务的reducer函数
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'
// 引入redux-devtool-extension，用于调试redux 只在开发下，加--save-dev
import {composeWithDevTools} from 'redux-devtools-extension'

// 汇总所有的Reducer，汇总成总的
const allReducer = combineReducers({
    andCount: countReducer,
    allPerson: personReducer
})

// 暴露store对象
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))