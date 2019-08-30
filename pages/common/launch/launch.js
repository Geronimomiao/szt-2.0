import { router, toNext } from '../../../utils/router.js'

Page({
  onReady() {
    setTimeout(() => {
      toNext(router('common', 'login'), 'r')
    } , 3800)
  }
})