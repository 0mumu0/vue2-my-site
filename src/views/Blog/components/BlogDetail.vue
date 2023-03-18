<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="asside">
      <span>日期：{{ formatDate(blog.createDate) }} </span>
      <span>浏览：{{ blog.scanNumber }} </span>
      <span
        ><a href="">评论：{{ blog.commentNumber }} </a></span
      >
      <span
        ><a href="">{{ blog.category.name }} </a></span
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";
import RightList from "./RightList";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
  components: {
    RightList,
  },
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  mixins: [fetchData([])],
  data() {
    return {};
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      return result.map((it) => ({
        ...it,
        isSelect: this.categoryId === it.id,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
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
  span,
  a {
    margin-right: 15px;
  }
  .markdown-body {
    margin: 2em 0;
  }
}
</style>