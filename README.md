# 前端微专业模块章节的配套DEMO


__目录结构__

```
.
├── LIFE // 包含模块部分的反模式集合和命名空间解决方案
│   ├── anti-pattern.js
│   └── namespace.js
├── amd // amd范例
│   ├── caculator.js
│   └── math.js
├── commonjs // 放置commonjs范例
│   ├── caculator-bundle.js //browserify打包结果
│   ├── caculator.js
│   └── math.js
├── es6   // 放置ES6范例的folder
│   ├── caculator.js
│   └── math.js
└── system
    ├── demo.html // demo page
    ├── es6-module-loader.js // 用来加载ES6的loader
    ├── system.js  // 即我们的system.js
    └── traceur.js // ES6的翻译器, 被Loader依赖

```


__注意事项__

应该需要开启一个静态服务器, 还是老规矩， 建议安装 puer


> 有问题直接在本项目留下issue
