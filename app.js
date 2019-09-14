//app.js
App({

  globalData: {
    // 用户私有信息
    userInfo: 　{
      state: '',
      // 用户已加入课程
      myclass: [{
        id: '4',
        url: 'https://img.wsmpage.cn/szt2/course/jindaishi.png',
        className: '材料1901-1902',
        schoolName: '天津外国语大学',
        title: '中国近代史纲要',
        detail: 'toDetail',
        join: 'join',
        isJoin: true
      }],
    },

    // app 页面所需要的共享 信息
    // 具体 新闻外链
    article_url: '',
    // 标记哪种资源 未找到
    sourceState: [],
    // 课程详情页展示的信息
    classDetail: {},
    // 所有课程信息
    classList: [{
      id: '1',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join',
      isJoin: false
    }, {
      id: '2',
      url: 'https://img.wsmpage.cn/szt2/course/maogai.png',
      className: '网络1801-1804',
      schoolName: '天津外国语大学',
      title: '毛泽东思想',
      detail: 'toDetail',
      join: 'join',
      isJoin: false
    }, {
      id: '3',
      url: 'https://img.wsmpage.cn/szt2/course/makesi.png',
      className: '物联1701-1704',
      schoolName: '天津外国语大学',
      title: '马克思主义基本原理概论',
      detail: 'toDetail',
      join: 'join',
      isJoin: false
    }, {
      id: '4',
      url: 'https://img.wsmpage.cn/szt2/course/jindaishi.png',
      className: '材料1901-1902',
      schoolName: '天津外国语大学',
      title: '中国近代史纲要',
      detail: 'toDetail',
      join: 'join',
      isJoin: true
    }]
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