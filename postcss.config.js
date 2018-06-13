module.exports = () => {
  config = {
    plugins: [
      require('postcss-easy-import')({prefix: '_'}), // keep this first
      require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ]
  };
  if (process.env.NODE_ENV == "production") {
    config.plugins = [
      ...config.plugins, 
      require('cssnano')
    ];
  };
  return config;
}