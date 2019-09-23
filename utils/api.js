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

  /**
   * 用户信息接口
   */
  
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
      openid: Math.random().toString(36).slice(-8)
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


  /**
   * 新闻列表接口
   */
  
  getNews(type) {
    let data = { type }
    return this._request.getRequest(this._baseUrl + '/get_post', data).then(res => res.data)
  }

  /**
   * 课程信息接口
   */
  getAllClass(token, state) {
    if(state === 'student') {
      return this._request.getRequest(this._baseUrl + '/check_class', { token }).then(res => res.data)
    } else if (state === 'teacher') {
      return this._request.getRequest(this._baseUrl + '/classes').then(res => res.data)
    }
    
  }

  // 给学生添加课程
  addClass(token, class_id) {
    let data = {
      token,
      class_id
    }

    return this._request.postRequest(this._baseUrl + '/classes', data).then(res => res.data)
  }

  // 根据课程id 查 课程的基本具体信息
  getClassInfo(class_id) {
    let data = {
      class_id
    }

    return this._request.getRequest(this._baseUrl + '/classes', data).then(res => res.data)
  }

  // 根据课程id 查课程的章节信息
  getClassDetail(class_id) {
    let data = {
      class_id
    }

    return this._request.getRequest(this._baseUrl + '/show_details', data).then(res => res.data)
  }

  // 根据小节信息 查小节对应的情景再现
  getVideoUrl(quarter_id) {
    let data = {
      quarter_id
    }
    
    return this._request.getRequest(this._baseUrl + '/quarter', data).then(res => res.data)
  }

  /**
   * 聊天室接口
   */

  // 加入群组
  addGroup(token, group_id, client_id) {
    let data = {
      token,
      group_id,
      client_id
    }
    return this._request.getRequest(this._baseUrl + '/add_group', data).then(res => res.data)
  }

  // 聊天
  sendMeg(token, group_id, message) {
    let data = {
      token,
      group_id,
      message
    }
    return this._request.getRequest(this._baseUrl + '/talk', data).then(res => res.data)
  }

}

export default Api

