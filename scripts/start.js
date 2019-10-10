const App = require('express')
const webpackDevMiddleWaer = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')

const app = App()
const compiler = webpack(webpackConfig)
app
    .use(webpackDevMiddleWaer(compiler))
    .listen(4242, null, () => {
        console.log('start dev server on http://localhost:4242')
    })