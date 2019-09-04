const app = getApp();

Page({

  data: {
    TabCur: 0,
    state: [{
      type: '课件'
    }, {
      type: '评价'
    }, {
      type: '互动'
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