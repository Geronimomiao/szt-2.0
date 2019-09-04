//app.js
App({
  
  globalData: {
    userInfo: 　{
      state: ''
    },
    article_url: '',
    // 标记哪种资源 未找到
    sourceState: '',
    myclass: '',
    classDetail: {}
  },

  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  }

})