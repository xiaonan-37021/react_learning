import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
	state = {
		messages: [
			{
				id: '01',
				title: '消息1'
			},
			{
				id: '02',
				title: '消息2'
			},
			{
				id: '03',
				title: '消息3'
			}
		]
	}

	replaceShow = (id, title) => {
		// replace跳转+ 携带params参数
		// this.props.history.replace(`/home/message/detail/${id}/${title}`)

		// replace跳转+ 携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		// replace跳转+ 携带state参数
		this.props.history.replace(`/home/message/detail`,{id, title})
	}

	pushShow = (id, title) => {
		// push跳转+ 携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		// push跳转+ 携带search参数
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

		// push跳转+ 携带state参数
		this.props.history.push(`/home/message/detail`,{id, title})
	}

	render() {
		const { messages } = this.state;
		return (
			<div>
				<ul>
					{messages.map((message) => {
						return (
							<li key={message.id}>
								{/* 向路由组件传递params参数*/}
								{/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}

								{/* 向路由组件传递search参数*/}
								{/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

								{/* 向路由组件传递state参数*/}
								<Link to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title } }}>{message.title}</Link>

								&nbsp <button onClick={() => (this.pushShow(message.id, message.title))}>push查看</button>
								&nbsp <button onClick={() => (this.replaceShow(message.id, message.title))}>replace查看</button>
							</li>
						)
					})
					}
				</ul>
				<br />
				{/* 声明接收params参数*/}
				{/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

				{/* search参数无需声明接收，正常注册路由即可*/}
				{/* <Route path='/home/message/detail' component={Detail} /> */}

				{/* state参数无需声明接收，正常注册路由即可*/}
				<Route path='/home/message/detail' component={Detail} />

				<button onClick={() => this.props.history.goBack()}>回退</button> &nbsp;
				<button onClick={() => this.props.history.goForward()}>前进</button> &nbsp;
				<button onClick={() => this.props.history.go(-2)}>回退2</button>
			</div>
		)
	}
}
