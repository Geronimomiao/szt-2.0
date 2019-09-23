const app = getApp()
import {
  router,
  toNext
} from '../../../utils/router.js'


Page({

  data: {
    name: '',
    number: '',
    modalName: ''
  },

  onLoad() {
    
  },


  toSelect() {
    toNext(router('common', 'select'), 'n')
  },

  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  numberInput(e) {
    this.setData({
      number: e.detail.value
    })
  },

  login() {
    let {
      name,
      number
    } = this.data
    
    // 用户登录接口
    app.api.userLogin(name, number)
      .then(res => {
        app.globalData.userInfo.token = res.data


        // 获取所有 课程信息
        app.api.getAllClass(res.data, res.msg).then(res => {
          console.log(res)
          app.globalData.classList = res.data
        })
        
        if(res.code === 10010) {
          app.globalData.userInfo.state = res.msg
          return res.data
        } else {
          this.setData({
            modalName: 'error'
          });
        }
        
        return res.data
      })
      .then(token => {
        // 根据用户 token 查用户信息
        app.api.userInfo(token).then(res => {
          // 将用户信息 存至全局变量
          app.globalData.userInfo.name = res.data.name
          app.globalData.userInfo.school = res.data.school
          app.globalData.userInfo.number = res.data.number
          
          res.data.class.map(item => {
            // 获取 学生课程 具体信息
            app.api.getClassInfo(item.class_id).then(res=>{
              app.globalData.userInfo.myclass = app.globalData.userInfo.myclass.concat(res.data) 
            })
          }) 
        })

        let state = app.globalData.userInfo.state
        toNext(router(state, 'home'), 'r')
      })
  },

  hideModal() {
    this.setData({
      modalName: null
    });
  },
})