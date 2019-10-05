import {
  router,
  toNext
} from '../../../utils/router.js'
const app = getApp()

Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'teacher',
      url: '/static/img/teacher.png',
      text: '教师'
    }, {
      id: 1,
      type: 'student',
      url: '/static/img/student.png',
      text: '学生'
    }],
    curId: 0
  },

  change(e) {
    this.setData({
      curId: e.currentTarget.dataset.id
    })
  },

  // 获取用户所选身份信息
  confirm() {
    // console.log(this.data.swiperList.filter(item => item.zIndex === 2)[0].type)
    let state = this.data.swiperList.filter(item => item.id === this.data.curId).shift().type
    console.log(state)
    app.globalData.userInfo.state = state
    toNext(router('common', 'register'), 'n')
  }
})