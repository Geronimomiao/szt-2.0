// 同后台的请求
import request from './request.js'

class Api {
  constructor() {
    this._baseUrl = 'https://szt.c5ppc.cn'
    this._defaultHeader = { 'data-type': 'application/json' }
    this._request = request
    this._request.setErrorHandler(this.errorHander)
  }

  /**
   * 统一的异常处理方法
   */
  errorHander(res) {
    console.error(res)
  }

  /**
   * 查询所有新闻列表
   */
  getNews(page = 1, size = 10) {
    let data = { page: page, size: size }
    return this._request.getRequest(this._baseUrl + 'news/client', data).then(res => res.data)
  }

  // 用户注册
  userRegister(state ,school, name, number) {
    

    let data = {
      school,
      name,
      number,
      openid: 1024
    }
  }

  
}

const api = new Api()

export default api

