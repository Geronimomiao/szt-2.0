const app = getApp()

Page({

  data: {
    chatList: []
  },

  onLoad() {
    this.linkSocket(); 
  },

  onUnload: function () {
    wx.onSocketClose(function (res) {
      console.log('WebSocket已关闭！')
    })
  },

  //连接socket
  linkSocket: function () {
    let that = this;
    wx.connectSocket({
      
      url: 'wss://szt.c5ppc.cn/wss',
      success() {
        console.log('连接成功')
        wx.onSocketMessage((res) => {
          console.log(res.data);
        })
        
      }
    })
  },
  
})