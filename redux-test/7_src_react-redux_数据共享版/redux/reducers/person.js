import { ADD_PERSON, DELETE_PERSON } from '../constant'
export default (preState = [{name: '张三', age: 18,id: 1}], action) => {
    switch (action.type) {
        // 添加一个人
        case ADD_PERSON:
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