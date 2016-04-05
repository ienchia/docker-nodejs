const koa = require('koa')
const static = require('koa-static')

const app = koa()

app.use(static('public'))

app.listen(3000)
