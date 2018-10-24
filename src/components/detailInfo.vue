<template>
    <div class="detail-info-wrapper">
        <div >
            <h2>易代储北京2号院</h2>
            <p class="light-color">未来3个月，预计腾空面积14094m</p>
            <div class="price-inrto">
                    <div class="item-intro">
                        <p class="dack-color">价格</p>
                        <p class="light-color">1.1元/m²/天起</p>
                    </div>
                    <div class="item-intro">
                        <p class="dack-color">起租面积</p>
                        <p class="light-color">100/m²</p>
                    </div>
                    <div class="item-intro">
                        <p class="dack-color">可租面积</p>
                        <p class="light-color">100/m²</p>
                    </div>
            </div>
        </div>
        <!--  -->
        <div>
            <ul>
                <li><span class="dack-color">区域：</span>北京市 - 朝阳区</li>
                <li><span class="dack-color">编号：</span>北京市 - 朝阳区</li>
                <li><span class="dack-color">地坪：</span>北京市 - 朝阳区</li>
                <li><span class="dack-color">高度：</span>北京市 - 朝阳区</li>
                <li><span class="dack-color">类型：</span>北京市 - 朝阳区</li>
                <li><span class="dack-color">模式：</span>北京市 - 朝阳区</li>
            </ul>
        </div>
        <split></split>
        <!-- 园区概况 -->
        <div>
            <h3>园区概况</h3>
            <p>易代储，定位于满足中小微企业灵活仓储需求的互联网仓储运营管理平台，通过产品+服务模式，整合各类优质仓库资源，搭建全国区域最广、库房最多、服务最优的管理平台，为客户提供仓储一站式解决方案。以灵活时间、灵活空间的仓储租赁方式，标准化的库内操作管理，不断推动仓储行业各环节升级和创新，提升供应链管理价值。</p>
        </div>
        <split></split>
        <!-- 园区信息 -->
        <div>
            <h3>园区信息</h3>
            <ul>
                <li><span class="dack-color">建筑面积：</span>1985m²</li>
                <li><span class="dack-color">仓储面积：</span>177m²</li>
                <li><span class="dack-color">园区资质：</span>--</li>
                <li><span class="dack-color">仓储个数：</span>3个</li>
            </ul>
        </div>
        <split></split>
        <!-- 地图 -->
        <location></location>
        <!-- 服务列表 -->
    </div>
</template>
<script>
import split from '@/components/split.vue'
import location from '@/components/location.vue'
export default {
  data () {
    return {}
  },
  components: {
    split,
    location
  }
}
</script>
<style lang="scss">
.detail-info-wrapper{
    padding-left: 20px;
    font-size: 14px;
    p{
        color: #696969;
    }
    ul li{
        color: #696969;
    }
    .light-color{
        color: #e84709;
    }
    .dack-color{
        color: #a0a0a0;
    }
    .price-inrto{
        display: flex;
        text-align: center;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
        .item-intro{
            flex: 1;
            border-right: 1px solid #eee;
            // padding-right: 15px;
            &:last-child{
                border: none
            }
        }
    }
    h2{
        font-size: 16px;
        margin: 10px 0;
    }
    h3{
        font-size: 16px;
        border-bottom:1px solid #eee;
        padding-bottom: 10px;
        margin: 10px 0;
    }
}
h3{
        border-bottom:1px solid #eee;
        padding-bottom: 10px;
        margin: 10px 0;
    }
</style>
