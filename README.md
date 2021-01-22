# Vue-vite-admin

Vue + TS + Vite 后台管理系统

## 项目介绍

模仿 Ant Design Pro 的 UI，自己来实现一个较为简单的Vue版本

## 使用

### 快速使用

```
npm install    #安装依赖

npm run dev  #启动项目

npm run build  #打包文件
```

### 权限控制

### 路由/菜单配置

## 目录结构

```
// 项目结构
├─dist                                // 打包文件
├─public                              // 默认模板文件
├─src
│  ├─api                              // 请求api文件
│  ├─assets                           // 静态资源
│      ├─img                          // 公共图片
│      └─svg                          // 公共svg
│  ├─components                       // 组件
│  ├─config                           // 自定义配置(图标库,axios的BaseURL等)
│  ├─constants                        // 全局变量
│  ├─enums                            // 全局枚举值
│  ├─hooks                            // 自定义hooks
│  ├─layout                           // 布局组件
│  ├─router                           // 路由文件
│  ├─store                            // 数据中心
│  ├─styles                           // 基本公用样式
│  ├─types                            // 全局类型
│  ├─utils                            // 工具类
│  ├─views                            // 视图页面
|  ├─App.tsx
|  ├─main.ts                          // 入口文件
|  ├─reportWebVitals                  // web vitals
|  ├─shim.d.ts                        // 类型声明
|  └─source.d.ts                      // 类型声明
├── .env
├── .eslintrc.js
├── .gitignore
├── .huskyrc
├── .prettierrc
├── CHANGELOG.md
├── commitlint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 功能计划

- [x] 项目基础架构(代码校验，依赖库，布局)
- [ ] 图表

## License

[MIT](LICENSE)
