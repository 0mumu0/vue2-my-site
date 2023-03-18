<template>
  <Layout>
    <div class="main-container" v-loading='isLoading'>
      <BlogDetail :blog="data" v-if="data"/>
    </div>
    <template #right>
      <div class="right-container" v-loading='isLoading'>
      <BlogTOC :toc="data.toc" v-if="data"/>

      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlog} from '@/api/blog';
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail.vue';
import BlogTOC from './components/BlogTOC.vue';

export default {
  mixins:[fetchData(null)],
  components:{
    Layout,
    BlogDetail,
    BlogTOC
  },
  methods:{
    async fetchData(){
      return await getBlog(this.$route.params.id)
    }
  }
}
</script>

<style lang="less" scoped>
  .main-container{
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    scroll-behavior: smooth;
  }
  .right-container{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    scroll-behavior: smooth;

  }
</style>

