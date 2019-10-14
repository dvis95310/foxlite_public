module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'vue_projects/foxlite_2.0/foxlite_3.0/dist'
    : '',
  devServer: {
      disableHostCheck: true,
      port:8080,
      proxy: 'http://54.37.226.188:3000/',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
  }
}