module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-tailwind-example/' : '/',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
