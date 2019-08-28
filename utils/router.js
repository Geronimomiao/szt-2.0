// 页面内所有路由

const routerMap = {
  'teacher': {
    'discuss': '/pages/discuss/discuss'
  },
  'student': {
    'discuss': '/pages/discuss/discuss'
  },
  'common': {
    
  }
}

const router = (state, dest) => {
  return routerMap[state][dest]
}


module.exports = {
  router
}