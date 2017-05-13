// @flow

import {
  homePage,
  feedPage,
} from '../controller/controller'

import {
  HOME_PAGE_ROUTE,
  FEED_PAGE_ROUTE,
} from '../../shared/routes'

import renderApp from '../views/render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(FEED_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, feedPage()))
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
