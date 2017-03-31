import { renderToString } from 'react-dom/server'
import { match } from 'react-router'
import { RouterContext } from 'react-router'
import { Router } from 'express'

var router = Router()

/* Universal Router */
/*router.get('*', function(req, res, next) {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message)
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>)
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>)
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup })
    }
  );
});*/

/* Universal Router */
router.get('*', function(req, res, next) {
  let markup = "test"

  res.render('index', { markup })
});

module.exports = router
