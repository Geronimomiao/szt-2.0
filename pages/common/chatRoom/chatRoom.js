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
      console.log(msg)
      if (msg.type === 'init') {
        // 获取 client_id
        let client_id = JSON.parse(res.data).client_id
        that.addGroup(client_id)
      } else if (msg.type === 'talk') {
        // 从服务端 收到消息
      }

    })
  },

  addGroup(client_id) {
    
    let token = '19d4e8d829eec609990e1e2d84245ef40ec95270'
    let group_id = '1234'

    app.api.addGroup(token, group_id, client_id).then(res => {
      this.sendMsg()
    })
  },
  
  sendMsg() {

    let token = '19d4e8d829eec609990e1e2d84245ef40ec95270'
    let group_id = '1234'
    let msg = 'wsm1wsm'

    app.api.sendMeg(token, group_id, msg)

  }

})