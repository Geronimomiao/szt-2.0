const app = getApp()

// 字幕颜色
const getRandomColor= () => {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

// 视频地址
let videoUrl = {}

Page({
  inputValue: '',
  data: {
    hasSelected: false,
    dest: 'u0',
    url: ''
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
        that.setMsg(msg)
      }

    })
  },

  // 加入群组
  addGroup(client_id) {

    let token = app.globalData.userInfo.token
    let group_id = '1234'

    app.api.addGroup(token, group_id, client_id)
  },

  // 收到 服务端消息
  setMsg(msg) {
    this.videoContext.sendDanmu({
      text: msg.message,
      color: getRandomColor()
    })
  },

  // 发消息
  sendMsg(msg) {

    let token = app.globalData.userInfo.token
    let group_id = '1234'

    app.api.sendMeg(token, group_id, msg)

    // 发送信息后 清空输入框
    this.setData({
      msg: null
    })
  },

  // 获取用户输入信息
  getMsg(e) {
    this.setData({
      msg: e.detail.value
    })

    
  },

  onReady(res) {
    // 获取视频地址信息
    let quarter_id = app.globalData.quarterId

    app.api.getVideoUrl(quarter_id).then(res => {
      videoUrl = res.data.videoUrl
      this.setUrl(this.data.dest)
      this.videoContext = wx.createVideoContext('myVideo')
      this.videoContext.requestFullScreen()
    })
  },

  bindSendDanmu() {
    // 自身和服务器 渲染 弹幕会出现2次
    // this.videoContext.sendDanmu({
    //   text: this.inputValue,
    //   color: getRandomColor()
    // })

    this.sendMsg(this.inputValue)
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  setUrl(dest) {
    this.setData({
      url: videoUrl[dest]
    }) 
  },

  select() {
    this.videoContext.exitFullScreen()
    this.setData({
      hasSelected: !this.data.hasSelected
    })
  },

  radioChange(e) {
    
    this.setData({
      hasSelected: !this.data.hasSelected,
      dest: e.currentTarget.dataset.dest,
    })
  
    this.setUrl(this.data.dest)
  }
})