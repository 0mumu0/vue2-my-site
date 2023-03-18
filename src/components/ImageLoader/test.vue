<template>
  <div class="test-container">
      <ImageLoader src="https://img.qdspub.com/image/171e055a050541f5936679b31d6b40a6.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://img.qdspub.com/image/171e055a050541f5936679b31d6b40a6.jpg?w=100"
      @load="handleLoaded"  :duration="500"/>
  </div>
</template>

<script>
import ImageLoader from './'

export default {
    components:{
        ImageLoader
    },
    methods:{
        handleLoaded(){
            console.log('ImageLoader组件load时间触发，图片加载完成')
        }
    }
}
</script>

<style lang="less" scoped>
.test-container{
width: 500px;
height: 300px;
  border: 2px solid;
  margin: 0 auto;
}

</style>>
