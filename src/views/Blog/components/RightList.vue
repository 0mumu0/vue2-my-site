<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i" @click="handleClick(item)">
      <span  :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span v-if="item.aside" class="aside" :class="{ active: item.isSelect }">{{item.aside}}</span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:'xxx',children:[{name:'bbb',children:[]}]}]
    list: {
      type: Array,
      default: () => [], //如果是对象或数组的话默认值得这么写
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      font-weight: bold;
      color: @warn;
    }
  }
}
.aside{
  font-size: 12px;
  margin-left: 1em;
  color: @gray;

}
</style>