<template>
    <div>
        <commonSwiper :swiperSlides = 'swiperSlides'>
          <div class="swiper-pagination" style="" slot="pagination"></div>
        </commonSwiper>
        <detail-info :detailData = 'detailData'></detail-info>
        <!-- <location></location> -->
        <div>
          <!-- <service>
          </service> -->
        </div>
        <div v-if="isWebShare">
          <fixed-bottom></fixed-bottom>
        </div>
    </div>
</template>
<script>

import commonSwiper from '@/components/commonSwiper.vue'
import detailInfo from '@/components/detailInfo.vue'
import service from '@/components/service.vue'
import fixedBottom from '@/components/fixedBottom.vue'
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
      swiperSlides: [],
      detailData: [],
      isWebShare: ''
    }
  },
  components: {
    commonSwiper,
    service,
    detailInfo,
    fixedBottom
  },
  methods: {
    // init
    init () {
      this.isWebShare = this.$route.query.share
      document.title = this.detailData.name
      const contentJson = {
        'title': this.detailData.name ? this.detailData.name : '详情',
        'content': '恒道云仓，专注于仓储互联网化的网络平台，仓库资源多，种类全，覆盖全国。找仓库，就到恒道云仓',
        'image': 'https://zhangwan-picture-stage.oss-cn-hangzhou.aliyuncs.com/aliyun_oss/activity_images/201810/26/16180384757.png',
        'url': 'https://api.hdyc.suanlaotou.com/html/cangDetail/index.html#/?id=' + this.$route.query.id + '&share=option'
      }
      // eslint-disable-next-line
      if (typeof (HengdaoCloud) !== 'undefined') { // 在恒道云仓中
        // eslint-disable-next-line
        HengdaoCloud.setShareInfo(JSON.stringify(contentJson))
        // eslint-disable-next-line
        this.uid = HengdaoCloud.getUserId()// eslint-disable-next-line
      }
    },
    // 获取详情
    getDetail () {
      this.$Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.$axios
        .get(`/v1/warehouse/read?id=${this.$route.query.id}`)
        .then(res => {
          if (res.data.code === 200) {
            this.detailData = res.data.data
            this.swiperSlides = res.data.data.images
          } else {
            this.$Toast(res.data.message)
          }
          this.$Indicator.close()
        })
        .catch(error => {
          console.log(error)
        })
    }
    // 客服
    // qiaoFu(){
    //   var _hmt = _hmt || [];
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?3fc28ef7489fd9309898ad3fad5c4f75";
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(hm, s);
    //   console.log('百度桥商')
    //   console.log(hm)
    // }
  },
  created () {
    // this.qiaoFu();
    this.getDetail()
  },
  mounted () {
    setTimeout(() => {
      this.init()
    }, 1200)
  }
}
</script>

<style lang="less">
// @import '/swiper/dist/css/swiper.css';
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
