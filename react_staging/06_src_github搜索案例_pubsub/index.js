// 引入react核心库
import React from "react";
// 引入react 渲染使用的包，解决控制台报错 Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
import { createRoot } from 'react-dom/client'
//引入APP组件 注：在React脚手架中.js和.jsx可以省略
import App from "./App";


// 渲染APP到页面
const root = createRoot(document.getElementById('root'));
root.render(
    // 开启react的严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>
);