
const app = getApp();

Page({
  data: {
    article_url: ''
  },
  onReady() {
    this.setData({
      article_url: app.globalData.article_url
    })
  }
})