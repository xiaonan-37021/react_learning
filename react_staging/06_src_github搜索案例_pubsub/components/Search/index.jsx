import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';

export default class Search extends Component {

    search = () => {
        // 获取用户的输入(连续解构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this;

        // 发送请求前通知List更新状态
        PubSub.publish('githubState',{ isFirst: false, isLoading: true })

        //发送网络请求 部署地址和发送接口地址一致，可以省略前缀
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // 发送成功后通知List更新状态
                PubSub.publish('githubState',{ isLoading: false, users: response.data.items })
            },
            error => {
                // 发送失败后通知List更新状态
                PubSub.publish('githubState',{ isLoading: false, err: error.message })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
} 