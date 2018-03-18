const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    ...baseConfig,
    entry: './example/index.jsx',
    mode: 'development',
    output: {
      path: resolve('./docs'),
      filename: 'index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Flash Message ✨',
        minify: { useShortDoctype: true },
        template: './example/index.html',
        hash: false,
      }),
    ],
  };
}

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    ...baseConfig,
    entry: './src/index.jsx',
    mode: 'production',
    output: {
      path: resolve('./build'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    externals: {
      react: 'react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    },
  };
}
