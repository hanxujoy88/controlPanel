import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


//开启debug模式
Vue.config.debug = true;

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import sidebar from './components/sidebar.vue'
import proprietor from './components/proprietor.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/proprietor',
      component: proprietor
    },
    {
      path: '/second',
      component: sidebar
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')