// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Nav from './component/nav'
import HomePage from './component/page/home'
import NotFoundPage from './component/page/not-found'
import FeedUserPage from './component/page/feed-page.jsx'
import {
  HOME_PAGE_ROUTE,
  FEED_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <h1>APP</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={FEED_PAGE_ROUTE} render={() => <FeedUserPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
