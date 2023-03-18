<template>
  <div class="blog-toc-container" v-loading="isLoading">
    <h2>目录</h2>

    <RightList :list="toc" @select="handleSelect" />
  </div>
</template>

<script>
// import fetchData from "@/mixins/fetchData.js";
// import { getBlogCategories } from "@/api/blog.js";
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  props:{
    toc:{
      type:Array,
      default:()=>{}
    }
  },
  // mixins: [fetchData([])],
  data() {
    return {};
  },
  computed: {
    // categoryId() {
    //   return +this.$route.params.categoryId || -1;
    // },
    // limit() {
    //   return +this.$route.query.limit || 10;
    // },
    // list() {
    //   const totalArticleCount = this.data.reduce(
    //     (a, b) => a + b.articleCount,
    //     0
    //   );
    //   const result = [
    //     { name: "全部", id: -1, articleCount: totalArticleCount },
    //     ...this.data,
    //   ];

    //   return result.map((it) => ({
    //     ...it,
    //     isSelect: this.categoryId === it.id,
    //     aside: `${it.articleCount}篇`
    //   }));
    // },
  },
  methods: {
    // async fetchData() {
    //   return await getBlogCategories();
    // },
    handleSelect(item) {
      location.hash = item.anchor
    },
  },
};
</script>

<style scoped lang='less'>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>