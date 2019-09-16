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
    // 签到信息
    checkIn: null,
    // 评教信息
    evaluation: null,
    card: [{
      type: 'discuss',
      msg: '课程讨论',
      url: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      func: 'toDiscuss'
    }, {
      type: 'checkIn',
      msg: '发起签到',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      func: 'check'
    }, {
      type: 'evaluation',
      msg: '发起评教',
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
    }
  }
})