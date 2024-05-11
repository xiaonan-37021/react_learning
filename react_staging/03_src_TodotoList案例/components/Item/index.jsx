/*
 * 
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃ 　
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃　　　　　　　　　　　
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug　　
 * 　　　┃　　　┃　　+　　　　　　　　　
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 * 
 * 
 * @Author: Nan_Xiao 2974483965@qq.com
 * @Date: 2020-12-07 16:43:34
 * @LastEditors: Nan_Xiao 2974483965@qq.com
 * @LastEditTime: 2024-01-14 12:08:36
 * @Description: 
 */

import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	// 标识鼠标移入移出
	state = { mouse: false }

	// 鼠标移入移出的回调
	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		}
	}

	// 勾选 取消勾选某一个todo的回调
	handleCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked)
		}
	}

	// 删除一个todo的回调
	handleDelete = (id) => {
		if (window.confirm('你确定删除吗？')) {
			this.props.deleteTodo(id)
		}
	}

	render() {
		const { id, name, done } = this.props
		const { mouse } = this.state
		return (
			// 鼠标移出 鼠标移入事件
			// 因为是在list组件中引入的Item 所以直接判断mouse值就行
			<li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
					<span>{name}</span>
				</label>
				<button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
			</li>
		)
	}
}