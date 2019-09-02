import { router, toNext } from '../../../utils/router.js'

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    list: [{
      icon: 'test',
      msg: '我的课件',
      func: 'list'
    }, {
      icon: 'choiceness',
      msg: '我的收藏',
      func: 'test'
    }, {
      icon: 'notice',
      msg: '我的消息',
      func: 'test'
    }, {
      icon: 'settings',
      msg: '帮助与反馈',
      func: 'test'
    }]
  },
  methods: {
    test() {
      console.log(11)
    },
    toInfo() {
      toNext(router('common', 'info'), 'n')
    }
  }
})