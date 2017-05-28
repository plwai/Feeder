// @flow

import express from 'express'
import compression from 'compression'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mainRoute from './router/mainRouter'
import { STATIC_PATH, getPort } from '../shared/config/config'

const config = getPort(process.env.NODE_ENV)
const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../', STATIC_PATH)))
app.use(express.static(path.join(__dirname, '../../', 'node_modules')))

mainRoute(app)

const server = app.listen(config.port, () => {
  const host = 'localhost'
  const port = server.address().port
  // eslint-disable-next-line no-console
  console.log('App listening at http://%s:%s', host, port)
})


module.exports = app
