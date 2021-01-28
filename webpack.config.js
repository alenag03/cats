const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer:    {
		contentBase: 'dist',
		hot:          true,
		host:         'localHost',
		port:         8080,
	},
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};