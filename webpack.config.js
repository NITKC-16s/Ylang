const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
	type: 'javascript/auto',
        test: /\.json$/,
        use: ['json-loader'],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
	  contentBase: path.join(__dirname, 'public/'),
	  watchContentBase: true,
  },
  output: {
	  filename: 'main.js',
	  path: path.join(__dirname, 'public/'),
  },
};
