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
    // 学生 功能栏
    list: [{
      bgCls: 'bc-top',
      iconCls: 'cuIcon-group',
      text: '加入课程',
      dest: 'course',
      func: 'toDest'
    }, {
      bgCls: 'bc-top',
      iconCls: 'cuIcon-post',
      text: '查看课件',
      dest: 'ppt',
      func: 'toDest'
    }, {
      bgCls: 'bc-bottom',
      iconCls: 'cuIcon-record',
      text: '情景再现',
      dest: 'video',
      func: 'toDest'
    }, {
      bgCls: 'bc-bottom',
      iconCls: 'cuIcon-punch',
      text: '课程评价',
      dest: 'comment',
      func: 'toDest'
    }],
    // 是否展示 未添加课程状态
    flag: true ,
    myclass: ''
  },
  pageLifetimes: {
    show() {
      // 页面加载时 判断用户有没有添加课程
      let myclass = app.globalData.userInfo.myclass
      // 如果之前添加了课程
      if (myclass) {
        this.setData({
          flag: false,
          ...myclass
        })
      }
    }
  },
  methods: {
    toDest(e) {
      // 跳转至学生端 功能页 
      // 考虑是否仅展示 学生加入的课程

      let dest = e.currentTarget.dataset.dest;
      toNext(router('common', 'courseList'), 'n')
    }
  }
})