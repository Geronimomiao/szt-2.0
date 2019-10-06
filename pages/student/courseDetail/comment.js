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
    scene: [],
    curId: -1,
    modalName: null
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

    // PickerChange(e) {
    //   this.setData({
    //     index: e.detail.value
    //   })

    //   // 学生端投票
    //   let choice = this.data.picker[e.detail.value]
    //   console.log(choice)
    //   let quarter_id = app.globalData.quarterId
    //   app.api.studentVote(quarter_id, choice)
    // },

    getInfo() {
      let quarter_id = app.globalData.quarterId;
      app.api.getVideoUrl(quarter_id).then(res => {
        this.setData({
          scene: res.data.scene
        })
      })

      app.api.getVote(quarter_id).then(res => {
        console.log(res)
        this.setData({
          picker: res.data.picker.split(','),
          question: res.data.question
        })
      })
    },

    change(e) {
      this.setData({
        curId: e.currentTarget.dataset.id
      })
    },

    submit() {
      
      this.setData({
        modalName: 'tip'
      });

      // 学生端 投票
      let choice = this.data.picker[this.data.curId]
      let quarter_id = app.globalData.quarterId
      app.api.studentVote(quarter_id, choice)
    },

    hideModal() {
      this.setData({
        modalName: null
      });
    },
  }
})