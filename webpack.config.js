const path = require('path');
const entryPoint = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const outputPoint = path.resolve(__dirname, 'public');


module.exports = {
  entry: entryPoint,
  output: {
    filename: 'bundle.js',
    path: outputPoint
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-react'],
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                }
              }
            ]
          ]
        }
      }
    ]
  }
};