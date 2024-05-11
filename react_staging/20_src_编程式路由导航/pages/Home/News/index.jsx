import React, { Component } from 'react'

export default class News extends Component {

	// 页面加载完成后，执行的自动跳转函数
	componentDidMount() {
		setTimeout(() => {
			this.props.history.push('/home/message')
		}, 2000)
	}
    render() {
        return (
			<ul>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		)
    }
}
