import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = async() => {
        // 获取用户的输入(连续解构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this;

        // 发送请求前通知List更新状态
        PubSub.publish('githubState', { isFirst: false, isLoading: true })

        //#region 发送网络请求 部署地址和发送接口地址一致，可以省略前缀(使用axios发送)
        /* axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // 发送成功后通知List更新状态
                PubSub.publish('githubState',{ isLoading: false, users: response.data.items })
            },
            error => {
                // 发送失败后通知List更新状态
                PubSub.publish('githubState',{ isLoading: false, err: error.message })
            }
        )
        */
        //#endregion

        //发送网络请求---使用fetch发送(未优化)
        /*fetch(`/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了', response)
                return response.json();
            },
            error => {
                console.log('联系服务器失败了', error)
                return new Promise(() => { })
            }
        ).then(
            response => { console.log('获取数据成功了', response) },
            error => { console.log('获取数据失败了', error),
        )*/

        //发送网络请求---使用fetch发送(优化) 但是老版本浏览器可能不支持
        /*fetch(`/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了', response)
                return response.json();
            }
        ).then(
            response => { console.log('获取数据成功了', response) }
        ).catch(
            error => { console.log('请求出错', error) }
        )*/

        //await （只有这个方法需要使用async，因为它需要等待请求完成 await）
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('githubState',{ isLoading: false, users: data.items })
        } catch (error) {
            console.log('请求出错',error)
            PubSub.publish('githubState',{ isLoading: false, err: error.message })
        }
        
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