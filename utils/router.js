// 页面内所有路由

const routerMap = {
  'teacher': {
    'home': '/pages/teacher/home/home',
    'courseDetail': '/pages/teacher/courseDetail/courseDetail'
  },
  'student': {
    'home': '/pages/student/home/home',
    'evaluation': '/pages/student/evaluation/evaluation',
    'courseList': '/pages/student/courseList/courseList',
    'courseDetail': '/pages/student/courseDetail/courseDetail'
  },
  'common': {
    'video': '/pages/common/video/video',
    'register': '/pages/common/register/register',
    'login': '/pages/common/login/login',
    'select': '/pages/common/select/select',
    
    'news': '/pages/common/news/news',
    'info': '/pages/common/info/info',
    
    'chatRoom': '/pages/common/chatRoom/chatRoom',
    'notFound': '/pages/common/notFound/notFound'
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