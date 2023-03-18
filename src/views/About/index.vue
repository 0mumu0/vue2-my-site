<template>
	<div id='aaa' ref='ccc'>
    <p ref="para">some paragraph</p>
    <!-- <ChildComp ref="comp" /> -->
    <button @click="handleClick">查看所有引用</button>
  </div>
</template>

<script>
  // import ChildComp from "./ChildComp"
	export default {
    components:{
      // ChildComp
    },
    methods:{
      handleClick(){
        // 获取持有的所有引用
        console.log(this.$refs);
        this.$showMessage({content:'评论成功',type:'success',container:this.$refs.ccc,callback:function(){
          console.log('aaa')
        }})
        // this.$showMessage('aaaa','info',2000,this.$refs.ccc)

        /*
        {
        	para: p元素（原生DOM）,
        	comp: ChildComp的组件实例
        }
        */
      }
    }
  }
</script>