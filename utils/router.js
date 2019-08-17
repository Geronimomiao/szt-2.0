// 页面内所有路由

const routerMap = {
  'teacher': {
    'discuss': '/pages/discuss/discuss'
  }
}

const router = (state, dest) => {
 return router[state][dest]
}


module.exports = {
  router
}