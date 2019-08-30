import { router, toNext } from '../../../utils/router.js'
const app = getApp()

Page({
  toRegister() {
    let state = app.globalData.userInfo.state
    toNext(router(state, 'func'), 'r')
  }
})