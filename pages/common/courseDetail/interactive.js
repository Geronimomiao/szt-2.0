import { router, toNext } from '../../../utils/router.js'

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    card: [{
      msg: '课程讨论',
      url: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg'
    }, {
      msg: '课程签到',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg'
    }, {
      msg: '进行评教',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg'
    }],
    discuss: [{
      title: '有哪些第一次读到便震撼的句子?'
    }, {
        title: '请问你对人工智能的前景如何看得？'
    }, {
        title: '如何评价雪碧和江小白联名推出“江小白味雪碧”和“雪碧味江小白”?'
    }]
  },
  methods: {
    toDiscuss() {
      toNext(router('common', 'chatRoom'), 'n')
    }
  }
})