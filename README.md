**项目简介**

* 基于 ColorUI 构建的小程序 分教师端 学生端

**改版特点**

* 使用 Websocket 进行实时通信
* 将一些易变化 地方分离出来 并加上大量注释 有助于提高项目可维护性
* 使用 部分策略模式对上一代版本进行重构
* 手风琴动画(rpx 与 px 的转换)
* 将图片 视频 等静态资源 使用七牛云进行 CDN 加速(优化用户体验)

**项目目录结构**

```
|
|- component // 可复用组件
|
|- lib // 第三方库
|    |- ColorUI // UI框架(https://github.com/weilanwl/ColorUI)
|    |- ali-icon // 字体图标
|    |- my-icon // 一些自定义字体图标
|    |- ec-canvas // ECharts 图表库(https://github.com/ecomfe/echarts-for-weixin)
|
|- utils
|    |- api.js // 后台 api 
|    |- request.js // 对请求方法进行封装
|    |- router.js // 前端 路由 跳转方式
|    |- store.js // 存一些关键的常量  
|
|- pages
|    |- common // 放教师 和 学生公用的页面
|         |- launch // 启动页图 
|         |- select // 选择身份
|         |- video // 情景再现
|         |- index // 首页新闻推送
|         |- person // 个人信息页面
|         |- login // 登录页面
|         |- register // 注册页面
|         |- news // 展示新闻页
|         |- info // 展示详细个人信息
|         |- chatRoom // 讨论区(通过 websocket 进行实时通信)
|    |- teacher // 放教师相关页面
|         |- home // 登录后 跳转页面
|         |- func // 管理课程页面
|         |- classDetail // 课程详细信息
|               |- courseDetail // 页面骨架
|               |- ppt // 课件查看页面
|               |- interactive // 交互页面
|               |- comment // 评价页面 
|    |- student // 放学生相关页面
|         |- home // 登录后 跳转页面
|         |- func // 功能页面
|         |- classList // 课程列表
|         |- classDetail // 课程详细信息
|               |- courseDetail // 页面骨架
|               |- ppt // 课件查看页面
|               |- interactive // 交互页面
|               |- comment // 评价页面 
|
|
|- static
|    |- css 
|        |- common.css // 覆盖第三方 默认样式
|    |- img // 图片资源
|
|
|- app.js // 全局变量 方法
|
|- app.wxss // 公共样式
```

**待改进点**

* 对小程序进行分包 不同的用户按需加载
* 将一些常用的函数 均挂载到 app 上 引入方便
* 切换页面时 在跳转前发起请求 将结果放入全局变量 在下一个页面从全局变量读 (减少网络请求时间)
