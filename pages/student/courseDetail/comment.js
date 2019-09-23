import { router, toNext } from '../../../utils/router.js'
const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    index: null,
    // 教师对应课程问题 及选项
    question: '',
    picker: [],
    // 情景再现 展示卡片 所需要数据
    scene: []
  },

  pageLifetimes: {
    show() {
      this.getInfo()
    }
  },

  ready() {
    this.getInfo()
  },

  methods: {
    toVideo() {
      toNext(router('common', 'video'), 'n')
    },

    PickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value
      })
    },

    getInfo() {
      let quarter_id = app.globalData.quarterId;
      app.api.getVideoUrl(quarter_id).then(res => {
        this.setData({
          scene: res.data.scene
        })
      })

      app.api.getVote(quarter_id).then(res => {
        this.setData({
          picker: res.data.picker.split(','),
          question: res.data.question
        })
      })
    }
  }
})