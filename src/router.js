import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage(page, opts = {layout: true}){
    //If the page has layout included, render the page within the Layout script, otherwise, just render the page
    // Options is an object because it reads better

    if (opts.layout) {
      page = (
          <Layout>
            {page}
          </Layout>
      )
    }

    React.render(page, document.body)
    //Render the page in the body
  },

  routes: {
    '':'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
    //Calling the function defined above, with the public page and not the layout
  },

  repos () {
    this.renderPage(<ReposPage/>)
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '2570190ae5872d87ccdb',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)
  }
})
