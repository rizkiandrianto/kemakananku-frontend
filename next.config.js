const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  webpack: (config, {dev}) => {
    const oldEntry = config.entry
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'] && entry['main.js'].push(path.resolve('./app/utils/offline'))
				return entry
      })
      
    config.resolve = {
      modules: ['node_modules', './']
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    ]
    // Enable Only in Development
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev,
          //configFile: path.resolve('./.eslintrc.js')
        }
      });
    }

    /* Enable only in Production */
		if (!dev) {
      config.plugins = [...config.plugins, 
        new SWPrecacheWebpackPlugin({
          cacheId: 'next-ss',
          filepath: './app/static/sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*' // Precache all static files by default
          ],
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/ //cache all files
            }
          ]
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin()
      ]
    }
    return config;
  },
  useFileSystemPublicRoutes: false
};
