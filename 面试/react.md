#  面试知识点汇总：React

## Vue 与 React

### 数据流不同
Vue支持双向绑定
React为单向数据流

### HoC 和 mixins

### 模板渲染方式的不同
React维护Render函数，使用上更贴近原生。
Vue可以使用template编译，以及自定义指令，如v-if。

### Redux 和 Vuex
Redux是不可变数据，Vuex是可变数据。Redux每次偶是用新的state替换旧的state，Vuex是直接修改。
Redux检测数据变化时，通过diff比较差异，Vuex是通过getter/setter来比较