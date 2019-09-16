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
    myclass: ''
  },

  ready() {
    this.setData({
      myclass: app.globalData.userInfo.myclass
    })
  },

  methods: {
    // 进入教师管理页面
    toDetail(e) {
      let target = e.currentTarget.dataset.id;
      app.globalData.detail = app.globalData.classList.filter(item => item.id === target).shift();
      toNext(router('teacher', 'courseDetail'), 'n');
      console.log(router('teacher', 'courseDetail'))
    }
  }

})