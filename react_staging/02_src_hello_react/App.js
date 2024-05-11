// 创建“外壳”组件App
// 注意：{Component}并非类似解构赋值，从react中去Component，这样是取不到的，而下面的之所以可以取到是因为 Component这个模块暴露处理了export
import React,{Component} from "react";
// 默认导出的名称不用必须一致
import Hello11 from "./component/Hello/Hello"
import Welcome from "./component/Welcome/Welcome"

// 创建并暴露app组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello11/>
                <Welcome/>
            </div>
        )
    }
}