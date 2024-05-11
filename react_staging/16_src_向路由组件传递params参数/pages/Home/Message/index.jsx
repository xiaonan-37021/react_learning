import React, { Component } from 'react'
import Detail from './Detail'
import { Link,Route } from 'react-router-dom'

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
								<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> 
							</li>
						)
					})
					}
				</ul>
				<br />
				{/* 声明接收params参数*/}
				<Route path='/home/message/detail/:id/:title' component={Detail}/>
			</div>
		)
	}
}
