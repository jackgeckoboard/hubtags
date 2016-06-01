import Router from 'ampersand-router'
import React from 'react'
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
    'repos': 'repos'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
    //Calling the function defined above, with the public page and not the layout
  },

  repos () {
    this.renderPage(<ReposPage/>)
  }
})
