const app = getApp()

Page({
  data: {
    school: '',
    number: '',
    name: ''
  },

  onShow() {
    this.setData({
      school: app.globalData.userInfo.school,
      number: app.globalData.userInfo.number,
      name: app.globalData.userInfo.name
    })
  }
})