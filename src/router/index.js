import Vue from 'vue';
import VueRouter from "vue-router";
import routes from '@/router/router'
Vue.use(VueRouter); // 使用一个vue插件

const router = new VueRouter({
  //路由配置
  routes,
  mode: 'history'
})

export default router;