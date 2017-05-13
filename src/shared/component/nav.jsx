// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  FEED_PAGE_ROUTE,
} from '../routes'

const Nav = () =>
  <nav>
    <ul>
      {[
        { route: FEED_PAGE_ROUTE, label: 'Feed' },
        { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

export default Nav
