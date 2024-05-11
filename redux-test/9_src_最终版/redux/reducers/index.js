// 引入combineReducers，用于汇总多个reducer
import { combineReducers} from 'redux'
// 引入为Count组件服务的reducer函数
import countReducer from './count'
// 引入为Person组件服务的reducer函数
import personReducer from './person'

// 汇总所有的Reducer，汇总成总的
export default combineReducers({
    andCount: countReducer,
    allPerson: personReducer
})