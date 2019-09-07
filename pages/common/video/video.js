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
const videoUrl = {
  'u0': 'http://wsmpage.cn/szt/videoplayback.mp4',
  'u1': 'http://wsmpage.cn/szt/videoplayback%20%281%29.mp4',
  'u2': 'http://wsmpage.cn/szt/videoplayback%20%282%29.mp4',
  'u3': 'http://wsmpage.cn/szt/videoplayback%20%284%29.mp4',
}

Page({
  inputValue: '',
  data: {
    hasSelected: false,
    dest: 'u0',
    url: ''
  },
  onReady(res) {
    this.setUrl(this.data.dest)
    this.videoContext = wx.createVideoContext('myVideo')
    this.videoContext.requestFullScreen()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  bindInputBlur: function (e) {
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
    console.log(this.data.dest)
    this.setUrl(this.data.dest)
  }
})