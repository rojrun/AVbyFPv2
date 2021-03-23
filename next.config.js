require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const path = require('path');
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

// module.exports = withCSS({
//   webpack: (config) => {
//     const env = {API_KEY: apiKey};
//     config.plugins.push(new webpack.DefinePlugin(env));
//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')]
//   }
// });


module.exports = {
  webpack: (config) => {
    const env = {API_KEY: apiKey};
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}