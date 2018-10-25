<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="str in swiperSlides" :key="str.index">
        <div  class="swiper-slide" :style="{ backgroundImage: 'url(' + str + ')' }"></div>
      </swiper-slide>
    </swiper>
    <slot name="pagination"></slot>
  </div>
</template>
<script>
/* eslint-disable */
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'commonSwiper',
  props: {
    swiperSlides: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      mounted () {
        // setInterval(() => {
        //   if (this.swiperSlides.length < 10) {
        //     this.swiperSlides.push(this.swiperSlides.length + 1)
        //   }
        // }, 1000)
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
// @import '/swiper/dist/css/swiper.css';
.swiper-container {
    width: 100%;
    // height: 13rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 212px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
