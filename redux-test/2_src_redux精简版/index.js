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

store.subscribe(() => {
    ReactDOM.render(
        // // 开启react的严格模式
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
});