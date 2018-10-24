<template>
    <div>
        <h3>地理位置</h3>
        <!-- 地理位置 -->
        <p>{{location}}</p>
        <div id="allmap"></div>
        <div class="loc-tabs">
            <ul>
                <li v-for="(item,index) in locaTab" :key="item.index" @click="tabChange(index)">
                    <span :class="num == index ? 'active': ''">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="park-map-result">
            <p>附近没有该类交通信息</p>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      locaTab: [' 高速 ', ' 机场 ', ' 商圈 '],
      location: '河南省新乡市城乡一体化示范区恒大御景湾',
      num: 0,
    }
  },
  mounted() {
    this.getMap()
  },
  methods: {
    //   获取地图
    getMap() {
      // 百度地图API功能
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)
      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(this.location,function(point) {
          if (point) {
            map.centerAndZoom(point, 16)
            map.addOverlay(new BMap.Marker(point))
          } else {
            alert('您选择地址没有解析到结果!')
          }
        },
        '北京市'
      )
    },
    // tab切换
    tabChange(index){
        this.num = index
    }
  }
}
</script>
<style lang='less'>
#allmap {
    height: 226px;
    overflow: hidden;
    margin-left:-20px;
    }
.loc-tabs{
    margin-left: -20px;
    ul{
        display: flex;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        text-align: center;
        li{
            flex: 1;
        }
        span{
            line-height: 40px;
            display: inline-block;
        }
        .active{
            color: #e84709;
            border-bottom: 2px solid #e84709;
            line-height: 40px;
            padding: 0 10px;
        }
    }
}
.park-map-result {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 33% 0;
    color: #666;
    background: url('./../assets/no-data.png') no-repeat center 27%;
}
</style>
