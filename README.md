# hello-world

##开发流程
clone

##安装依赖
npm install

##执行
gulp

### 页面
首先在 `views` 下面新建 `jade` 文件，根据需要继承 `layout` 下面的模版（也可以自己添加）。
Views/includes 下面的组件都是通用的，可以 `include` 进来使用。
`datas/` 下面定义的都是 `includes` 里面 `mixin` 引用的数据。
`layout` 下面定义页面的模版，可以提前将需要的 `data` 和 `mixin` 引入进来。
### 样式
在 `sass` 下对应的文件里面添加 `.scss` 文件，并需要在 `main.scss` 里面 `import` 进来。
### 脚本
页面引用的 `js` 文件都位于 `public/js` 下面，根据需要添加引用。
##出包
因为这个项目都是纯静态文件，所有最后需要将后台开发需要的文件单独弄出来。所以在开发完后需要运行
```bash
gulp dist
```
将开发所需要的静态文件都放在 `dist` 文件下，最后将这个文件夹下的文件推到 `dist` 分支上就可以了。
