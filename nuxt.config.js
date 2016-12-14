module.exports = {
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: ['~assets/main.css'],
  router: {
    routes: [
      {
        name: 'topic',
        path: '/:tab',
        component: 'pages/_topic'
      },
      {
        name: 'post',
        path: '/post/:id',
        component: 'pages/_post'
      }
      // {
      //   path: '/',
      //   redirect: '/topic/all'
      // },
    ]
  }
}
