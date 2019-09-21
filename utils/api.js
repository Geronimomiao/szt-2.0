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


  // 用户登录(获取用户 token )(使用 姓名 学号 登录) 
  userLogin(name, number) {
    let data = {
      name, 
      number
    }

    return this._request.getRequest(this._baseUrl + '/login', data).then(res => res.data)
  }
  
  // 根据用户 token 获取用户信息
  userInfo(token) {
    let data = { token }
    return this._request.getRequest(this._baseUrl + '/user_info', data).then(res => res.data)
  }

}

export default Api

