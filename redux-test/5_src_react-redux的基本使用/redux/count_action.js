// 该文件专门为Count组件生成action对象

import { INCREMENT, DECREMENT } from './constant';

// ({type: 'INCREMENT',data}) 不加()会被认为后面的{}是函数的{}
// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })

// 异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}

export function createDecrementAction(data) {
    return {
        type: DECREMENT,
        data
    }
}