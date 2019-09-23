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
    let that = this 

    wx.connectSocket({  
      url: 'wss://szt.c5ppc.cn/wss',
      success() {
        console.log('连接成功')
        
      }
    })

    wx.onSocketMessage((res) => {
      let msg = JSON.parse(res.data)
  
      if (msg.type === 'init') {
        // 获取 client_id
        let client_id = JSON.parse(res.data).client_id
        that.addGroup(client_id)
      } else if (msg.type === 'talk') {
        // 收到服务端 消息
        console.log(msg)
      }

    })
  },

  addGroup(client_id) {
    let token = '19d4e8d829eec609990e1e2d84245ef40ec95270'
    let group_id = '1234'
    
    // 加入群组
    app.api.addGroup(token, group_id, client_id)
  },
  
  sendMsg() {
    app.api.sendMeg(token, group_id, msg)
  }

})