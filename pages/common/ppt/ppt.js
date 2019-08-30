Page({
  show() {
    wx.downloadFile({
      // 暂时关闭域名校验
      url: 'http://wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt',
      success: function(res) {
        var filePath = res.tempFilePath 
        wx.openDocument({
          filePath: filePath,
          success: function(res) {
            console.log('打开文档成功')
          }
        })
      }
    })

  }
})