// @flow

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mainRoute from './router/mainRouter'
import { STATIC_PATH, getPort } from '../shared/config/config'

const config = getPort(process.env.NODE_ENV)
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../', STATIC_PATH)))
app.use(express.static(path.join(__dirname, '../', 'node_modules')))

app.use('/', mainRoute)

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found')
  res.status = 404
  res.render('error', {
    message: err.message,
    error: err,
  })
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
})

const server = app.listen(config.port, () => {
  const host = 'localhost'
  const port = server.address().port
  // eslint-disable-next-line no-console
  console.log('App listening at http://%s:%s', host, port)
})


module.exports = app
