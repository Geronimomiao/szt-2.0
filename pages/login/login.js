import { router, toNext } from '../../utils/router.js'

Page({
  toSelect() {
    toNext(router('common', 'select'), 'n')
  }
})