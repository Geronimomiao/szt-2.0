const app = getApp();

Page({

  data: {
    TabCur: 0,
    flag: true,
    modalName: '',
    state: [{
      type: '课程结构',
      
    }, {
      type: '课前准备',
     
    }, {
      type: '实时互动',
      
    }],
  },

  onReady() {
    let detail = app.globalData.detail;

    // 
    this.setData({
      ...detail
    })
  },

  tabSelect(e) {
    if (this.data.flag) {
      this.setData({
        modalName: 'tip'
      });
    } else {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
      })
    }
    
  },


  hideModal() {
    this.setData({
      modalName: null
    });
  },

  
  changeType(dest) {
    console.log(dest.detail)
    this.setData({
      flag: false,
    })
  }
})