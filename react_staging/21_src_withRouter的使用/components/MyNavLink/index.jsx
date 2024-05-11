import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            // 会传入children属性对应MyNavLink标签内的值 {to: '/About', title: 'About', children: 'About'}
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
        )
    }
}
