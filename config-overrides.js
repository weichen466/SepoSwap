const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  // Disable TypeScript type checking for faster builds
  const tsConfig = config.plugins.find(
    plugin => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin'
  );
  if (tsConfig) {
    tsConfig.options.typescript.configOverwrite = {
      compilerOptions: {
        skipLibCheck: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true
      }
    };
  }
  // Add node polyfills for webpack 4
  config.node = {
    ...config.node,
    crypto: 'empty',
    stream: 'empty',
    buffer: 'empty',
    util: 'empty',
    url: 'empty',
    assert: 'empty'
  };

  // Fix for ES module issues - treat .mjs files as regular JavaScript
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((oneOfRule) => {
        if (oneOfRule.test && oneOfRule.test.toString().includes('js')) {
          oneOfRule.test = /\.(js|mjs|jsx|ts|tsx)$/;
        }
      });
    }
  });

  // Add rule to handle .mjs files specifically
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
  });

  // Add provider plugin for global variables
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  );

  return config;
};
