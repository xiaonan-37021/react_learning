import React, { Component } from 'react'
// 引入store，同于获取redux中保存的状态 
import store from '../../redux/store'

export default class Count extends Component {

    state = {
        count: 0
    }

    // componentDidMount() {
    //     // 监听store中的数据，当数据改变时，更新组件
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // 加法
    increment = () => {
        const { value } = this.selectNumber

        store.dispatch({
            type: 'INCREMENT',
            data: value*1
        })
    }

    // 减法
    decrement = () => {
        const { value } = this.selectNumber

        store.dispatch({
            type: 'DECREMENT',
            data: value*1
        })
    }

    // 奇数再加
    incrementIfOdd = () => {
        const count = store.getState()
        const { value } = this.selectNumber

        if (count % 2 !== 0) {
            store.dispatch({
                type: 'INCREMENT',
                data: value*1
            })
        }
    }

    // 异步加
    incrementAsync = () => {
        setTimeout(() => {
            this.increment()
        }, 500)
    }

    render() {
        return (
            <div>
                {/* 获取store中的数据 */}
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
