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
/* eslint-disable */
import commonSwiper from '@/components/commonSwiper.vue'
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
      console.log(this.detailData.name)
				const content_json = {
					"title": this.detailData.name ? this.detailData.name: '详情',
					"content": this.detailData.name ? this.detailData.name: '',
					"image": this.detailData.ss_share_img ,
					"url": 'https://app.16988.cn/html/apph5/exhiBition.html#/index?id='+this.$route.query.id
				};
				if (typeof (HengdaoCloud) != "undefined") { //在掌玩中
					HengdaoCloud.setShareInfo(JSON.stringify(content_json));
					this.uid = HengdaoCloud.getUserId();
				}
    },
    // 获取详情
    getDetail () {
      this.$Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      
      this.$axios
        .get(`/v1/warehouse/read?id=${this.$route.query.id}`)
        .then(res => {
          console.log(res)
          if(res.data.code == 200){
            this.detailData = res.data.data
            this.swiperSlides = res.data.data.images
          }else{
            this.$Toast(res.data.message)
          }
          this.$Indicator.close()
          
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 客服
    qiaoFu(){
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?00798509c3c9e02c6c40ce30d0f03e71";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    }
  },
  created () {
    this.qiaoFu();
    this.getDetail();
    
  },
  mounted (){
    setTimeout(()=>{
      this.init();
    },1200)
    
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
