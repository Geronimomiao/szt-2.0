import {
  router,
  toNext
} from '../../../utils/router.js';

const funcType = {
  'discuss': {
    'func': 'toDiscuss'
  },
  'checkIn': {
    'func': 'checkIn'
  },
  'evaluation': {
    'func': 'toEvaluation'
  },
};

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    premisson: null,
    card: [{
      type: 'discuss',
      msg: '课程讨论',
      url: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      func: 'check'
    }, {
      type: 'checkIn',
      msg: '课程签到',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      func: 'check'
    }, {
      type: 'evaluation',
      msg: '进行评教',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
      func: 'check'
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
    },
    check(e) {
      // 通过 向服务器 发请求 判断教师端 是否开启某项功能

      // 如果 开启 则根据开启的不同功能 调用不同方法
      let type = e.currentTarget.dataset.type;
      this[funcType[type]['func']]();

      // 如果未开启 则弹窗提示
      // this.unPremission()
    },
    checkIn() {
      this.setData({
        premisson: 1
      })
    },
    unPremission() {
      this.setData({
        premisson: 0
      })
    },
    result() {
      // 根据服务器返回结果 判断判断签到是否成功

      // 如果成功
      this.setData({
        premisson: 3
      })
    },
    hideModal() {
      this.setData({
        premisson: null
      })
    },
    toEvaluation() {
      toNext(router('student', 'evaluation'), 'r')
    }
  }
})