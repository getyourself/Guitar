module.exports = {
    devServer: {
        // 配置要连接的服务器
        proxy: {
            // 代替真实地址的地址
          '/api': {
            target: 'http://localhost:82',
            // 服务器真实地址
            changeOrigin: true,
            // 跨域
          },
        }
      }
  }