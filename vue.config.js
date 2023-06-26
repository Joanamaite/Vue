const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
const path = require('path');
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue/'
    : '/'
};
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
