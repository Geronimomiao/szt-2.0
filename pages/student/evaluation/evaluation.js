const app = getApp()

import {
  router,
  toNext
} from '../../../utils/router.js';


Page({
  data: {
    hasSelected: false,
    selectClass: 'select-2',
    point: '+5',
    modalName: ''
  },


  choice(e) {
    let point = e.currentTarget.dataset.point
    let selectClass = e.currentTarget.dataset.selectclass
    
    this.setData({
      hasSelected: true,
      selectClass: selectClass,
      point: point
    })
    setTimeout(() => {
      this.setData({
        modalName: 'DialogModal'
      })
    }, 1300)

    let quarter_id = app.globalData.quarterId
    let choice = e.currentTarget.dataset.choice
    app.api.studentEvaluation(quarter_id, choice).then(res => {
      console.log(res)
    })
  },

  hideModal() {
    this.setData({
      modalName: ''
    })
    toNext(router('student', 'home'), 'r');
  }

})