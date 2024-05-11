import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]

// 使用qs将对象转成urlCoding
let obj = {
    id:'01',
    name:'hello'
}
console.log(qs.stringify(obj))

// 使用qs将urlCoding转成对象
let str = 'id=01&name=hello'
console.log(qs.parse(str))
export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        // const {id,title} = this.props.match.params

        // 接收search参数
        // const {search} = this.props.location
        // 截取掉开头的?
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数 如果 state 对象不存在，以防止错误，它将从一个空对象中解构，这样 id 和 title 就会是 undefined。这种写法使得代码更加健壮，能够优雅地处理 state 对象可能不存在的情况。
        const {id,title} = this.props.location.state || {}

        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        }) || {}
        console.log(findResult)
        return (
            <div>
                <ul>
                    <li>ID: {id}</li>
                    <li>TITLE: {title}</li>
                    <li>CONTENT: {findResult.content}</li>
                </ul>
            </div>
        )
    }
}
