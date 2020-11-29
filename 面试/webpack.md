## plugin
- **compiler**对象包含了 Webpack 环境所有的的配置信息。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
- **compilation**对象包含了当前的模块资源、编译生成资源、变化的文件等。当运行webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

### compiler和compilation的区别在于：

compiler：代表整个webpack从启动到关闭的生命周期
compilation：代表了一次新的编译过程

