import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

	state = {
		users: [], //初始化状态，users初始值为数组
		isFirst: true, //是否为第一次打开页面
		isLoading: false, //是否处于正在加载中
		err: '' //存储请求相关的错误信息
	}

	// 根本App的state
	updateAppState = (stateObj) => {
		// this.setState({users:users})
		this.setState(stateObj)
	}

	render() {
		return (
			<div>
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		)
	}
}
