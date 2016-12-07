import Vue from 'vue'
import Vuex from 'vuex'
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
Vue.use(Vuex)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import sidebar from './components/sidebar.vue'
import proprietor from './components/proprietor.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'hash',
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

/*const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}*/

const moduleB = {
	  state: { 
	    todos: [
	      { id: 1, text: '...', done: true },
	      { id: 2, text: '...', done: true },
	      { id: 2, text: '...', done: false },
	    ],
	    count: []
	  },
	  getters: {
		    doneTodos: state => {
		      return state.todos.filter(todo => todo.id == 1).length
		    }
	  },
	  mutations: {
		  	increment (state,payload) {
		      // 变更状态
		      state.count = payload
		    }
	  },
	  actions: {
		    increment (context) {
		      context.commit('increment')
		    }
  	  }
}

const store = new Vuex.Store({
  	modules: {
//	    a: moduleA,
	    b: moduleB
  	}
})


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')