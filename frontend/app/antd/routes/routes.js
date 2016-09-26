/*
  Name   : define routes for app
  Author : zhangbaitong@163.com
  Date   : 2016-09-23
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

//web pages
import Application from '../containers/Application'
import Welcome from '../components/Welcome'
import ProductsPage from '../containers/ProductsPage'
import LoginPage from '../containers/LoginPage'
import About from '../components/About'

//admin pages
import AdminPage from '../containers/AdminPage'
import WelcomeAdmin from '../components/WelcomeAdmin'
import ProductsAdmin from '../containers/ProductsPageAdmin'
import Tmpl from '../components/Tmpl.js'


export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Welcome}/>
    <Route path="products" component={ProductsPage} />
    <Route path="about" component={About} />
    <Route path="admin/login" component={LoginPage} />
    <Route path="admin" component={AdminPage} >
      <IndexRoute component={WelcomeAdmin}/>
      <Route path="products" component={ProductsAdmin} />
      <Route path="tmpl" component={Tmpl} />
    </Route>
  </Route>
)


