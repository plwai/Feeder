// @flow
import { Router } from 'express'
import { isProd } from '../../shared/utils'
import { STATIC_DIST, WDS_PORT } from '../../shared/config/config'
import { helloEndpointRoute } from '../../shared/routes'

const router = Router()

// [under app.get('/')...]

router.get(helloEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server! (received ${req.params.num})` })
})

/* Universal Router */
router.get('*', (req, res) => {
  const markup = 'test'
  const appPath = `${isProd ? STATIC_DIST : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js`

  res.render('index', { markup, appPath })
})

module.exports = router
