import './mock'  //注释了就不用模拟数据
import Vue from 'vue';
import App from './App.vue';
import router from '@/router'
// Vue.config.productionTip = false 

// 全局注册组件
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage ;

// 注册全局指令
import vLoading from './directives/loading'
Vue.directive('loading',vLoading)

import * as blogApi from './api/blog'

// blogApi.getBlogTypes().then((r) =>{
//   console.log('aaa',r);
// });
// blogApi.getBlogs().then((r) =>{
//   // console.log('aaa',r);
// })
// blogApi.getBlog('aaa').then((r) =>{
//   console.log('xxxxx',r);
// })
// blogApi.postComment({
//   nickName:'昵称',
//   content:"评论内容",
//   blogId:'123'
// }).then((r) =>{
//   console.log('bbbb',r);
// })
// blogApi.getComments('aaa').then((r) =>{
//   console.log('dddd',r);
// })
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')




