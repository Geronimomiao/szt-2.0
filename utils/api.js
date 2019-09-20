// 同后台的请求
import Request from './request.js'

class Api {
  constructor() {
    this._baseUrl = 'https://szt.c5ppc.cn'
    this._defaultHeader = { 'data-type': 'application/json' }
    this._request = new Request()
    this._request.setErrorHandler(this.errorHander)
  }

  /**
   * 统一的异常处理方法
   */
  errorHander(res) {
    console.error(res)
  }

  // 用户注册
  userRegister(state ,school, name, number) {
    let pathSelect = {
      'student': '/stu_register',
      'teacher': '/tc_register'
    }

    let data = {
      school,
      name,
      number,
      openid: 1025
    }

    
    return this._request.postRequest(this._baseUrl + pathSelect[state], data).then(res => res.data)

  }

  
}

export default Api

