<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>

    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";
import RightList from "./RightList";
export default {
  components: {
    RightList,
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
        aside: `${it.articleCount}篇`
      }));
    },
  },
  methods: {
    async fetchData() {
      let data = await getBlogCategories();
      console.log(data);
      return data
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
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;

  scroll-behavior: smooth;//平滑滚动

  h2 {
    font-weight: bold;
    letter-spacing: 2px;//字间距
    font-size: 1em;
    margin: 0;
  }
}
</style>