import { router, toNext } from '../../../utils/router.js'
const app = getApp()

Page({
  data: {
    name: '',
    school: '',
    number: ''
  },

  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  schoolInput(e) {
    this.setData({
      school: e.detail.value
    })
  },

  numberInput(e) {
    this.setData({
      number: e.detail.value
    })
  },

  // 用户注册
  toRegister() {
    let state = app.globalData.userInfo.state
    let { name, school, number} = this.data

    // 将用户注册信息 存至全局变量
    app.globalData.userInfo.name = name
    app.globalData.userInfo.school = school
    app.globalData.userInfo.number = number

    

    app.api.userRegister(state, school, name, number).then(res => {
      if (res.code === 10010) {
        app.globalData.userInfo.token = res.data
        console.log(res.data)
        // 获取所有 课程信息
        app.api.getAllClass(res.data).then(res => {
          console.log(res)
          app.globalData.classList = res.data
        })
      } else if(res.code === 10011){
        app.globalData.userInfo.token = res.data.token

        // 获取所有 课程信息
        app.api.getAllClass(res.data.token).then(res => {
          app.globalData.classList = res.data
        })
      }

      toNext(router(state, 'home'), 'r')
    })
  
  }
})