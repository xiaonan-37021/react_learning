/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * 
 * @Author: Nan_Xiao 2974483965@qq.com
 * @Date: 2024-01-01 15:02:15
 * @LastEditors: Nan_Xiao 2974483965@qq.com
 * @LastEditTime: 2024-01-14 12:06:20
 * @Description: 
 */

/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 * 
 * @Author: Nan_Xiao 2974483965@qq.com
 * @Date: 2024-01-01 15:02:15
 * @LastEditors: Nan_Xiao 2974483965@qq.com
 * @LastEditTime: 2024-01-14 11:57:16
 * @Description: 
 */

import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	// 状态在哪里 操作状态的方法就在哪里

	// 初始化状态
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: true },
			{ id: '003', name: '敲代码', done: false },
		]
	}

	// 用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj) => {
		// 获取原todos
		const { todos } = this.state;
		// 追加一个todo
		const newTodos = [todoObj, ...todos]
		this.setState({ todos: newTodos })
	}

	// 用于更新一个todo对象
	updateTodo = (id, done) => {
		// 获取状态中的todos
		const { todos } = this.state

		// 匹配处理数据
		const newTodos = todos.map((todoObj) => {
			if (todoObj.id === id) {
				// 找到对应的todo后将done的值换成传入的值
				return { ...todoObj, done: done }
			} else {
				return todoObj
			}
		})

		//更新状态
		this.setState({ todos: newTodos })
	}

	// 用于删除一个todo
	deleteTodo = (id) => {
		// 获取状态中的todos
		const { todos } = this.state
		// 删除指定id对于的todo
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})

		//更新状态
		this.setState({ todos: newTodos })
	}

	// 全选
	checkAllTodo = (done) => {
		// 获取状态中的todos
		const { todos } = this.state
		// 加工数据
		const newTodos = todos.map((todoObj) => {
			return { ...todoObj, done: done }
		})

		//更新状态
		this.setState({ todos: newTodos })
	}

	// 清除所有已完成的
	deleteAllDone = () => {
		// 获取状态中的todos
		const { todos } = this.state
		// 过滤数据
		const newTodos = todos.filter((todoObj)=>{
			// return todoObj.done ===false
			return !todoObj.done // 两者等价的
		})
		
		//更新状态
		this.setState({ todos: newTodos })
	}

	render() {
		const { todos } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone={this.deleteAllDone}/>
				</div>
			</div>
		)
	}
}
