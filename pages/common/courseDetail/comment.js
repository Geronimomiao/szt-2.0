import { router, toNext } from '../../../utils/router.js'


Component({
  options: {
    addGlobalClass: true,
  },

  methods: {
    toVideo() {
      toNext(router('common', 'video'), 'n')
    }
  }
})