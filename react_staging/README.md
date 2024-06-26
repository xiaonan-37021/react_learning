## 插件代码片段
---
> rcc 类式组件代码生成
> rfc 函数式组件代码生成
> imp 引入模块代码生成


https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md


## 一、todoList案例相关知识点
		1.拆分组件、实现静态组件，注意：className、style的写法
		2.动态初始化列表，如何确定将数据放在哪个组件的state中？
					——某个组件使用：放在其自身的state中
					——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
		3.关于父子之间通信：
				1.【父组件】给【子组件】传递数据：通过props传递
				2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
		4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
		5.状态在哪里，操作状态的方法就在哪里

## 事件触发函数有参无参区别及细节
> 在 React 中，当你给事件处理函数传递参数时，如果你直接在事件处理函数中调用该函数并传递参数，那么该函数会在渲染过程中立即被调用，而不是在事件触发时才被调用。
> 这是因为在 React 中，事件处理函数应该是一个回调函数，而不是一个立即执行的函数。当你直接在事件处理函数中调用函数并传递参数时，实际上是在渲染过程中执行了该函数，并**将其返回值作为事件处理函数**。

## 二、setState()和setState({})区别
> this.setState(stateObj) 允许你先构造或者准备一个状态对象，然后一次性更新多个状态。这对于基于当前状态或 props 计算得到新状态时非常有用。
> this.setState({users: users}) 或简写为 this.setState({ users }) 是一种更直接、语法上更简洁的方式，适用于直接更新状态，尤其是当更新的状态直接来自于当前作用域的变量时，**特别是当你只需要更新状态中的一个或几个字段时。**