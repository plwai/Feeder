// @flow
import { Router } from 'express'
import { isProd } from '../../shared/utils'
import { STATIC_DIST, WDS_PORT } from '../../shared/config/config'

const router = Router()

/* Universal Router */
router.get('*', (req, res) => {
  const markup = 'test'
  const appPath = `${isProd ? STATIC_DIST : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js`

  res.render('index', { markup, appPath })
})

module.exports = router
