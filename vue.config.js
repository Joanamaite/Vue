const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/Vue/' : '/',
  outputDir: 'dist',
  // outras configurações...
});
