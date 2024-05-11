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

	render() {
		const { messages } = this.state;
		return (
			<div>
				<ul>
					{messages.map((message) => {
						return (
							<li key={message.id}>
								{/* 向路由组件传递params参数*/}
								{/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>  */}

								{/* 向路由组件传递search参数*/}
								{/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

								{/* 向路由组件传递state参数*/}
								<Link replace to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title } }}>{message.title}</Link>
							</li>
						)
					})
					}
				</ul>
				<br />
				{/* 声明接收params参数*/}
				{/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可*/}
				{/* <Route path='/home/message/detail' component={Detail} /> */}

				{/* state参数无需声明接收，正常注册路由即可*/}
				<Route path='/home/message/detail' component={Detail} />
			</div>
		)
	}
}
