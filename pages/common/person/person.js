const app = getApp();

import {
  router,
  toNext
} from '../../../utils/router.js';



Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    list: [{
      icon: 'list',
      msg: '我的课件',
      func: 'notFound',
      source: 'ppt'
    }, {
      icon: 'choiceness',
      msg: '我的收藏',
      func: 'notFound',
      source: 'fav'
    }, {
      icon: 'notice',
      msg: '我的消息',
      func: 'notFound',
      source: 'message'
    }, {
      icon: 'settings',
      msg: '帮助与反馈'
    }]
  },
  methods: {
    notFound(e) {
      // console.log(e.currentTarget.dataset.source)
      // 默认用户 没有任何资源
      let type = e.currentTarget.dataset.source;
      app.globalData.sourceState = type;
      toNext(router('common', 'notFound'), 'n')
    },
    toInfo() {
      toNext(router('common', 'info'), 'n')
    }
  }
})