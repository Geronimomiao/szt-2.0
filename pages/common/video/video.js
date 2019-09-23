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

  onReady(res) {
    // 获取视频地址信息
    let quarter_id = '2jhguy3qwr423f432'

    app.api.getVideoUrl(quarter_id).then(res => {
      videoUrl = res.data.videoUrl
      this.setUrl(this.data.dest)
      this.videoContext = wx.createVideoContext('myVideo')
      this.videoContext.requestFullScreen()
    })
  },

  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
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