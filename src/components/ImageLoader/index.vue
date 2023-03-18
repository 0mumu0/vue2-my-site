<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" :src="placeholder" class="placeholder" alt="" srcset="" />
    <img :style="{'opacity':originOpacity,transition:`${duration}ms`}" @load="handleLoad" :src="src"  alt="" srcset="" />
  </div>
</template>

<script>
// import Icon from "../Icon"
export default {
  components: {
    // Icon
  },
  props: {
    duration: {
      type: Number,
      default: 500,
    },
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data(){
      return{
    originLoaded: false, //原图是否加载完成
    everythingDone: false, //是否一切尘埃落定
      }

  },
  computed:{
      originOpacity(){
          return this.originLoaded?1:0
      }
  },
  methods: {
    load() {},
    handleLoad() {
        this.originLoaded = true
        setTimeout(()=>{
          this.everythingDone = true;
          this.$emit('load')
        },this.duration)
      console.log("原图加载完成");
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
  // color: @gray;
  // text-align: center;
}
</style>