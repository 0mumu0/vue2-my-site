<template>
<!--  这样的写法编译的时候，会自动转成对应的路径 -->
  <img class="loading-container" src="@/assets/loading.svg" alt="" srcset="" />
</template>

<script>

//如果引入的是静态路径，但是得用变量名引入，就可以这么写
import loadingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl,
    };
  },
};
</script>

<style scoped lang='less'>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>