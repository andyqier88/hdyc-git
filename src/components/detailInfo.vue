<template>
    <div class="detail-info-wrapper">
        <div >
            <h2>{{detailData.name}}</h2>
            <!-- <p class="light-color">未来3个月，预计腾空面积14094m</p> -->
            <div class="price-inrto">
                    <div class="item-intro">
                        <p class="dack-color">价格</p>
                        <p class="light-color">{{detailData.rent}}元/m²/天起</p>
                    </div>
                    <div class="item-intro">
                        <p class="dack-color">起租面积</p>
                        <p class="light-color">{{detailData.minimum_rental_area}}/m²</p>
                    </div>
                    <div class="item-intro">
                        <p class="dack-color">可租面积</p>
                        <p class="light-color">{{detailData.area}}/m²</p>
                    </div>
            </div>
        </div>
        <!--  -->
        <div class="list-flex-top">
            <ul>
                <li><span class="dack-color">模式：</span>{{detailData.mode_name}}</li>
                <li><span class="dack-color">位置：</span>{{detailData.area_name}}</li>
                <li><span class="dack-color">编号：</span>{{detailData.area_code}}</li>
                <li><span class="dack-color">地坪：</span>{{detailData.surface_name}}</li>
                <li><span class="dack-color">类型：</span>{{detailData.type_name}}</li>
            </ul>
        </div>
        <split></split>
        <!-- 园区概况 -->
        <div class="park-intro">
            <h3>园区概况</h3>
            <p>{{detailData.summary}}</p>
        </div>
        <split></split>
        <!-- 园区信息 -->
        <!-- <div  class="list-flex">
            <h3>园区信息</h3>
            <ul>
                <li><span class="dack-color">建筑面积：</span>{{detailData.area}}m²</li>
                <li><span class="dack-color">仓储面积：</span>177m²</li>
                <li><span class="dack-color">园区资质：</span></li>
                <li><span class="dack-color">仓储个数：</span>{{detailData.number_of_warehouses}}个</li>
            </ul>
        </div>
        <split></split> -->
        <!-- 基本信息 -->
        <div class="list-flex">
            <h3>基本信息</h3>
            <h4>参数</h4>
            <ul>
                <li><span class="dack-color">仓储个数：</span>{{detailData.number_of_warehouses}}个</li>
                <li><span class="dack-color">二层以上承重(吨/m²)：</span>{{detailData.bearing_above_two_stories}}</li>
                <li><span class="dack-color">底层承重(吨/m²)：</span>{{detailData.bottom_bearing}}</li>
                <li><span class="dack-color">卸货平台：</span>{{detailData.landing_platform_name}}</li>
                <li><span class="dack-color">主干道宽度：</span>{{detailData.main_road_width}}</li>
                <li><span class="dack-color">建筑高度：</span>{{detailData.height}}</li>
                <li><span class="dack-color">建筑结构：</span>{{detailData.building_structure_name}}</li>
                <li><span class="dack-color">园区资质：</span>{{detailData.credentials_name}}</li>
            </ul>
            <h4>设施</h4>
            <ul>
                <li><span class="dack-color">是否通水：</span>{{detailData.facility_through_water ? '是' : '否'}}</li>
                <li><span class="dack-color">是否配电：</span>{{detailData.facility_through_water ? '是' : '否'}}</li>
                <li><span class="dack-color">是否有雨棚：</span>{{detailData.facility_canopy ? '是' : '否'}}</li>
                <li><span class="dack-color">其他：</span>
                    <span v-if="detailData.facility_else_name.length">
                        <span  v-for="item in detailData.facility_else_name" :key="item.index">{{item}}</span>
                    </span>
                    <span v-else>无</span>
                </li>
            </ul>
            <h4>安防</h4>
            <ul>
                <li><span class="dack-color">安保系统：</span> <span v-for="item in detailData.security_system_name" :key="item.index">{{item}}</span></li>
                <li><span class="dack-color">消防系统：</span>消防联动系统( <span v-for="item in detailData.ffl_eqp_name" :key="item.index">{{item}}</span>等)</li>
                <li><span class="dack-color">消防级别：</span>{{detailData.fire_fighting_level_name}}</li>
            </ul>
        </div>
        <split></split>
        <!-- 地图 -->
        <location :detailData='detailData'></location>
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
  props: {
    detailData: ''
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
    h4{
        padding: 10px 0;
    }
}
    .list-flex ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        &:first-child{
            border: none;
        }
        li{
            width: 50%;
            line-height: 2;
        }
        &:last-child{
            border: none;
            li{
                width: 100%;
            }
        }
    }
    .list-flex-top ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 48%;
            line-height: 2;
        }
    }
    h3{
        border-bottom:1px solid #eee;
        padding-bottom: 10px;
        margin: 10px 0;
    }
    .park-intro p{
        padding-right: 20px;
    }
</style>
