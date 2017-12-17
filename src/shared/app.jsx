// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Nav from './component/nav'
import HomePage from './component/page/home'
import NotFoundPage from './component/page/not-found'
import FeedPage from './component/page/feed-page.jsx'
import UserPage from './component/page/user-page.jsx'
import {
  HOME_PAGE_ROUTE,
  FEED_PAGE_ROUTE,
  USER_PAGE_ROUTE,
} from './routes'

import {
  Grid,
  Cell,
} from 'react-mdl';

const App = () =>
  <div style={{width: '100%', margin: 'auto'}}>
    <Grid>
      <Cell offset={4} col={4}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{backgroundColor: '#3f51b5', color: 'white'}}>Feeder</h1>
        </div>
        <Nav />
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
          <Route path={FEED_PAGE_ROUTE} render={() => <FeedPage />} />
          <Route path={USER_PAGE_ROUTE} render={() => <UserPage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </Cell>
    </Grid>
  </div>

export default App
