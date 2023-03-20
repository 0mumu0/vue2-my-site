<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template>
        

        <!-- vue-router 匹配到的组件会渲染到这里 -->
        <RouterView/>
         <!-- 或 -->
        <!-- <router-view></router-view> -->
      </template>  
      
    </Layout>
<ToTop/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout'
import SiteAside from './components/SiteAside'
// import "@/styles/global.less";
import ToTop from './components/ToTop';
export default {
  name: 'App',//如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    HelloWorld,
    Layout,
    SiteAside,
ToTop
  }
}
</script>

<style lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/global.less";

.app-container{
  .self-fill(fixed);


}
.aside{
  width: 250px;
  height: 100%;
}
// .empty {
//   .self-center()
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
