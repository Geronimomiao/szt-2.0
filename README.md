**项目简介**

* 基于 ColorUI 构建的小程序 分教师端 学生端

**项目目录结构**

```
|
|- component // 可复用组件
|
|- lib // 第三方库
|    |- ColorUI // UI框架
|    |- ali-icon // 字体图标
|
|- utils
|    |- api.js // 后台 api 
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
|         |- ppt // 课件展示 
|         |- login // 登录页面
|         |- register // 注册页面
|         |- news // 展示新闻页
|    |- teacher // 放教师相关页面
|         |- home // 登录后 跳转页面
|         |- func // 功能页面
|    |- student // 放学生相关页面
|         |- home // 登录后 跳转页面
|         |- func // 功能页面
|
|
|- static
|    |- css 
|    |   |- common.css // 覆盖第三方 默认样式
|    |- img // 图片资源
|
|
|- app.js // 全局变量 方法
|
|- app.wxss // 公共样式
```

