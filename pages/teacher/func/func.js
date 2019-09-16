const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    myclass: ''
  },

  ready() {
    this.setData({
      myclass: app.globalData.userInfo.myclass
    })
  }

})