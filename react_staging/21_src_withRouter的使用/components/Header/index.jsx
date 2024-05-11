import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="page-header"><h2>React Router Demo</h2>
                <button onClick={() => this.props.history.goBack()}>回退</button> &nbsp
                <button onClick={() => this.props.history.goForward()}>前进</button> &nbsp
                <button onClick={() => this.props.history.go(-2)}>回退2</button>
            </div>
        )
    }
}

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
export default withRouter(Header)