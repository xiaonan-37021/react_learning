import { ADD_PERSON, DELETE_PERSON } from '../constant'
export default (preState = [{name: '张三', age: 18,id: 1}], action) => {
    switch (action.type) {
        // 添加一个人
        case ADD_PERSON:
            //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
            return [action.data, ...preState]
        case DELETE_PERSON:
            return {
                ...preState,
                [action.payload.id]: null
            }
        default:
            return preState
    }
}