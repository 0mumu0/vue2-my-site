<template>

<!-- messge组件：一个弹窗消息 -->
  <div class="message-container">
    <div class="content">
      <!-- 内置组件，插槽，占位 -->
      <slot></slot>
    </div>
    <!-- 这里是消息内容，可以是一个文本，也可以是一段html，具体是什么不知道，需要父组件指定 -->
    <button>确定</button>
    <button>关闭</button>

  </div>
  

</template>

<script>
export default {
  props: {

  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.message-container {
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50% -50%);
border: 2px solid;
padding: 20px;
}
</style>
