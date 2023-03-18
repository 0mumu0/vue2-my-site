<template>
  <div v-loading="isLoading" ref="container" class="home-container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handelTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouseItem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < banners.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :class="{ active: i === index }"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouseItem from "./CarouseItem";
import Icon from "@/components/Icon";
// import Loading from "@/components/Loading";

export default {
  components: {
    CarouseItem,
    Icon,
    // Loading,
  },

  data() {
    return {
      isLoading: true,
      banners: [],
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //整个容器高度
      switching: false, //是否正在切换中
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  updated() {
    console.log("aaaccc");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.index++;
        this.switching = true;
      }
    },
    //切换结束
    handelTransitionEnd() {
      console.log("end");
      this.switching = false;
    },
    handleResize() {
      // console.log("handleResize");
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/global.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  // background: @dark;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    &.active {
      background: #fff;
    }
  }
}
</style>