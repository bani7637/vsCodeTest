//import vue
import Vue from 'vue'

//import router
import VueRouter from 'vue-router'

//import bootstrap
import BootstrapVue from 'bootstrap-vue'



//import vue components
import App from './App.vue'
import Home from '@/views/Home.vue'
import createBoard from '@/views/createBoard.vue'



Vue.config.productionTip = false
//router사용
Vue.use(VueRouter);
//bootstrap사용
Vue.use(BootstrapVue)


//router 객체 생성
//페이지 이동 설정
const router = new VueRouter({
  //routes collection은 경로(path)와 component로 이루어짐.
  //이 collection의 순서대로 router가 경로를 matching해서 component를 출력한다
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/createBoard',
      component:createBoard
    }
  ]
});

//vue instance 객체 생성
new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app')