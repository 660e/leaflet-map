const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true
  },
  productionSourceMap: false,
  publicPath: './',
  transpileDependencies: true
});
