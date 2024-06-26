const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ // 遇见/api1这个前缀的请求，就会触发该代理配置
            target:'http://localhost:5000', // 请求转发给谁
            changeOrigin:true, // 控制服务器收到发请求头中Host字段的值 default:false true: 接受的Host为5000的 false：真实的地址
            pathRewrite:{'^/api1':''} // 重写请求路径，api1替换为''(必须)
        })
    )
}