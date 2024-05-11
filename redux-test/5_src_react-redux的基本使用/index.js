import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';


ReactDOM.render(
    // // 开启react的严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// 订阅store，检测redux中状态的变化，如果有变化，重新渲染App组件
store.subscribe(() => {
    ReactDOM.render(
        // // 开启react的严格模式
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
});