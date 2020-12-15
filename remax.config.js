const sass = require('@remax/plugin-sass');
module.exports = {
  plugins: [sass()],
  configWebpack({config}) {
    //配合VSCode的CSS Modules插件,配置"cssModules.camelCase": true
    config.module.rule('sass').oneOf('modules').use('css-loader').merge({
      options: {
        localsConvention: 'camelCase'
      }
    })
  }
};
