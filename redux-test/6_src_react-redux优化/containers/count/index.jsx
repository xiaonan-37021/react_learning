import React, { Component } from 'react'

// 引入connect用于连接UI自建与Redux
import { connect } from 'react-redux';
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';


class Count extends Component {

    state = {
        count: 0
    }


    // 加法
    increment = () => {
        const { value } = this.selectNumber

        this.props.increment(value*1)
    }

    // 减法
    decrement = () => {
        const { value } = this.selectNumber

        this.props.decrement(value*1)
    }

    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber

        if(this.props.count % 2 !== 0){
            this.props.increment(value*1)
        }
    }

    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber

        this.props.incrementAsync(value*1, 500)
    }

    render() {
        console.log("1111", this.props)
        return (
            <div>
                {/* 获取store中的数据 */}
                <h1>当前求和为：{this.props.count}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state }), 
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     // 通知redux执行加法
    //     increment: number => dispatch(createIncrementAction(number)),
    //     decrement: number => dispatch(createDecrementAction(number)),
    //     incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    // })
    
    // mapDispatchToProps的精简写法
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        // 实践测试发现也可以写成这种的
        incrementAsync: (number, time) => createIncrementAsyncAction(number, time)
    }
    )(Count);