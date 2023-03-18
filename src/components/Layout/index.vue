<template>
  <!-- Layout组件 -->
  <div class="layout-container">
    <!-- 我们希望把页头放在这里，提供插槽，名为header -->
    <div class="left">
      <slot name="left"></slot>
    </div>

    <!-- 我们希望把主要内容放这里，提供插槽，名为default -->
    <div class="main">
      <slot></slot>
    </div>

    <!-- 我们希望把页脚放这里，提供插槽，名为footer -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped lang="less">
/* 带有作用域的样式 */
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  right {
    flex: 0 0 auto;
  }
  .main {
    flex: 1 1 auto;
  }
  /* position: fixed;
left: 50%;
top: 50%;
transform: translate(-50% -50%);
border: 2px solid;
padding: 20px; */
}
</style>
