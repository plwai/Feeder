// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FEED_PAGE_ROUTE,
  USER_PAGE_ROUTE,
} from '../routes'

import {
  Layout,
  Header,
  TabBar,
  Tab,
} from 'react-mdl'

const Nav = () =>
<nav className="mdl-tabs mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events">
    <TabBar cssPrefix='mdl-tabs' activeTab={1}>
    {[
      { route: FEED_PAGE_ROUTE, label: 'Feed' },
      { route: USER_PAGE_ROUTE, label: 'Profile' },
    ].map(link => (
      <Tab component={NavLink} to={link.route} key={link.route} style={{ width: "100%"}} activeStyle={{ color: "pink" }}>{link.label}</Tab>
    ))}
    </TabBar>
</nav>

export default Nav
