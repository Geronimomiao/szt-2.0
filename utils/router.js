// 页面内所有路由

const routerMap = {
  'teacher': {
    'func': '/pages/teacher/func/func'
  },
  'student': {
    'func': '/pages/student/func/func'
  },
  'common': {
    'register': '/pages/common/register/register',
    'login': '/pages/common/login/login',
    'select': '/pages/common/select/select'
  }
}

const router = (state, dest) => {
  return routerMap[state][dest]
}


// 路由跳转的方式 
// n 页面入栈 r 所有页面出栈 新页面入栈
const toNextMethod = {
  n(url) {
    wx.navigateTo({
      url,
    })
  },
  r(url) {
    wx.reLaunch({
      url,
    })
  }
} 

const toNext = (url, method) => {
  toNextMethod[method](url)
}


module.exports = {
  router,
  toNext
}