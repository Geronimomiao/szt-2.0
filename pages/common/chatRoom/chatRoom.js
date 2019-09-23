const app = getApp()

Page({

  data: {
    msg: null,
    inputTxt: '',
    InputBottom: 0,
    chatList: []
  },

  onLoad() {
    this.linkSocket();
    this.heartBeat();
  },

  onUnload() {
    wx.onSocketClose(res => {
      console.log('WebSocket已关闭！')
    })
  },

  // 心跳重连(向 socket 发信息)
  sendSocketMessage(msg) {
    wx.sendSocketMessage({
      data: msg
    })
  },

  // 心跳重连
  heartBeat() {
    setInterval(() => {
      this.sendSocketMessage(11)
    }, 30000)
  },

  //连接socket
  linkSocket() {
    let that = this

    wx.connectSocket({
      url: 'wss://szt.c5ppc.cn/wss',
      success() {
        console.log('连接成功')
        wx.onSocketError((res) => {
          console.log('WebSocket连接打开失败')
          that.linkSocket()
        })
        wx.onSocketClose((res) => {
          console.log('WebSocket 已关闭！')
          that.linkSocket()
        })
      },


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
        that.setMsgList(msg)
      }

    })
  },

  // 加入群组
  addGroup(client_id) {

    let token = app.globalData.userInfo.token
    let group_id = app.globalData.quarterId

    app.api.addGroup(token, group_id, client_id)
  },

  // 发消息
  sendMsg(msg) {
    
    let token = app.globalData.userInfo.token
    let group_id = app.globalData.quarterId

    app.api.sendMeg(token, group_id, this.data.msg)

    // 发送信息后 清空输入框
    this.setData({
      inputTxt: '',
      msg: null
    })
  },

  // 获取用户输入信息
  getMsg(e) {
    this.setData({
      msg: e.detail.value
    })
  },

  // 获取数据 判断是否为自己 然后加入聊天列表
  setMsgList(msg) {
    let name = app.globalData.userInfo.name
    
    name == msg.name ? msg.self = true : msg.self = false
    
    // 添加用户头像
    msg.img = 'https://img.wsmpage.cn/szt2/bg/sun.png'
    // 判断用户传来 信息是否为空
    if(msg.message !== 'null') {
      
      this.data.chatList.push(msg)

      this.setData({
        chatList: this.data.chatList
      })
    }
    
  },

  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },

  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  }

})