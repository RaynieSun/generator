# simpleReact
简单的 react 脚手架,使用 webpack, es6，实现了浏览器热更新

## runtime transform
通过runtime transform 代替 babel-pollify，避免污染全局变量

## package.json
```shell
npm install

npm run build

npm run dev
```

webpack-dev-server: 在 localhost:8080 建立一个 Web 服务器
--devtool eval : 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
--progress - 显示合并代码进度
--colors - 命令行中显示颜色
--content-base build - 指向设置的输出目录
