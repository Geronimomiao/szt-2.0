import Api from './utils/api.js'

//app.js
App({

  globalData: {
    // 用户私有信息
    userInfo: 　{
      token: '',
      state: '',
      name: '',
      number: '',
      school: '',
      // 用户已加入课程
      myclass: [],
    },

    // app 页面所需要的共享 信息
    // 具体 新闻外链
    article_url: '',
    // 标记哪种资源 未找到
    sourceState: [],
    // 课程详情页展示的信息
    classDetail: {},
    // 所有课程信息
    classList: '',

    // 通过 小节ID 获取 课前准备 实时互动 的信息
    quarterId: ''
  },

  onLaunch() {
    
    // 获取用户设备信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })

  },

  api: new Api()

})