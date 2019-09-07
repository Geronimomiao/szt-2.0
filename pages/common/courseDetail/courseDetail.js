const app = getApp();

Page({

  data: {
    TabCur: 0,
    state: [{
      type: '课程结构'
    }, {
      type: '课前准备'
    }, {
      type: '实时互动'
    }],
  },

  onReady() {
    let detail = app.globalData.detail;
    
    this.setData({
      ...detail
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },

})