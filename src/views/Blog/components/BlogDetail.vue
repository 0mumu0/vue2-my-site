<template>
  <div class="blog-detail-container" >
    <h1>{{ blog.title }}</h1>
    <div class="asside">
      <span>日期：{{ formatDate(blog.createDate) }} </span>
      <span>浏览：{{ blog.scanNumber }} </span>
      <span
        ><a href="#data-form-container">评论：{{ blog.commentNumber }} </a></span
      >
      <span
        ><RouterLink :to="{
          name:'CategoryBlog',
          params:{
            categoryId:blog.category.id
          }
        }">{{ blog.category.name }} </RouterLink></span
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {

  props: {
    blog: {
      type: Object,
      require: true,
    },
  },


  methods: {
    formatDate,
  },
};
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";

.blog-detail-container {
  .asside {
    font-size: 12px;
    color: @gray;
  }
  span{
    margin-right: 15px;
  }
  .markdown-body {
    margin: 2em 0;
  }
}
</style>