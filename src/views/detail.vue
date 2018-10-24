<template>
    <div>
        <commonSwiper :swiperSlides = 'swiperSlides'>
          <div class="swiper-pagination" style="" slot="pagination"></div>
        </commonSwiper>
        <detail-info></detail-info>
        <!-- <location></location> -->
        <div>
          <service>
          </service>
        </div>
        <div>
          <fixed-bottom></fixed-bottom>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import commonSwiper from '@/components/commonSwiper.vue'
// import location from '@/components/location.vue'
import detailInfo from '@/components/detailInfo.vue'
import service from '@/components/service.vue'
import fixedBottom from '@/components/fixedBottom.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'detail',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      swiperSlides: [
         'https://hdyc-pic-dev.oss-cn-hangzhou.aliyuncs.com/app/common/img/cangku.jpg' ,
         'https://hdyc-pic-dev.oss-cn-hangzhou.aliyuncs.com/app/common/img/cangku.jpg' ,
         'https://hdyc-pic-dev.oss-cn-hangzhou.aliyuncs.com/app/common/img/cangku.jpg' ,
         'https://hdyc-pic-dev.oss-cn-hangzhou.aliyuncs.com/app/common/img/cangku.jpg' ,
         'https://hdyc-pic-dev.oss-cn-hangzhou.aliyuncs.com/app/common/img/cangku.jpg' 
      ],
      detailData: []
    }
  },
  components: {
    commonSwiper,
    service,
    detailInfo,
    fixedBottom
  },
  methods: {
    // 获取详情
    getDetail () {
      this.$axios
        .get(`/v1/warehouse/read?id=${this.$route.query.id}`)
        .then(res => {
          console.log(res)
          this.detailData = res.data.data
          this.swiperSlides = res.data.data.images
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getDetail()
  }
}
</script>
<style lang="less">
@import '/swiper/dist/css/swiper.css';
.swiper-pagination{
  right: 0 !important;
  left: auto;
  color: rgb(255, 255, 255);
  text-align: center;
  right: 0;
  background: rgba(0,0,0,0.2);
  border-radius: 20px;
  width: 50px;
  padding: 2px 5px;
  font-size: 14px;
}
.swiper-pagination-bullet {
      width: 0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: #cea068;
    }
</style>
