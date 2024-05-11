// 该文件专门为Count组件生成action对象

import { INCREMENT, DECREMENT } from './constant';

// ({type: 'INCREMENT',data}) 不加()会被认为后面的{}是函数的{}
export const createIncrementAction = data => ({type: INCREMENT,data})

export function createDecrementAction(data) {
    return {
        type: DECREMENT,
        data
    }
}