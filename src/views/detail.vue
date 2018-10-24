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
import commonSwiper from '@/components/commonSwiper.vue'
// import location from '@/components/location.vue'
import detailInfo from '@/components/detailInfo.vue'
import service from '@/components/service.vue'
import fixedBottom from '@/components/fixedBottom.vue'

export default {
  name: 'detail',
  data () {
    return {
      swiperSlides: [
        { 'gi_img': 'https://img-blog.csdn.net/20180110222712301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGFuZGVyX3hpb25n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' },
        { 'gi_img': 'https://img-blog.csdn.net/20180110222712301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGFuZGVyX3hpb25n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' },
        { 'gi_img': 'https://img-blog.csdn.net/20180110222712301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGFuZGVyX3hpb25n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' },
        { 'gi_img': 'https://img-blog.csdn.net/20180110222712301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGFuZGVyX3hpb25n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' },
        { 'gi_img': 'https://img-blog.csdn.net/20180110222712301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGFuZGVyX3hpb25n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast' }
      ]
    }
  },
  components: {
    commonSwiper,
    service,
    detailInfo,
    fixedBottom
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
