module.exports = {
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
      .loader("@intlify/vue-i18n-loader")
      .end();
    //console.log("config.module", config.optimisation)
    //console.log("config", config)
    config.optimization.usedExports(true).sideEffects(false).nodeEnv("production")
  }
}