<template>
    <div class="detail-info-wrapper">
        <!--  -->
        <div class="list-flex-de">
            <ul>
                <li><span class="dack-color">需求编号：</span>{{detailData.id}}</li>
                <li><span class="dack-color">截止日期：</span>{{detailData.expiration_date.substring(0,10)}}</li>
                <li><span class="dack-color">位置：</span>{{detailData.province_name}}{{detailData.city_name}}{{detailData.area_name}}</li>
                <li style="text-align: right;padding-right: 20px;color: green;"><span >{{detailData.demand_status_name}}</span></li>
            </ul>
        </div>
        <div class="list-flex-de">
            <ul class="list-flex-ul">
                <li><span class="dack-color">类型：</span>{{detailData.type_name}}</li>
                <li><span class="dack-color">模式：</span>{{detailData.mode_name}}</li>
                <li><span class="dack-color">库高：</span>{{detailData.height_name}}</li>
                <li><span class="dack-color">地坪：</span>{{detailData.surface_name}}</li>
                <li><span class="dack-color">租赁周期：</span>{{detailData.leasehold_cycle_name}}</li>
                <li><span class="dack-color">需求面积：</span>{{detailData.demand_area}}</li>
            </ul>
            <p class="lihe"><span class="dack-color">存放物品：</span><span v-for="item in detailData.storage_of_articles_name" :key="item.index">{{item}}</span></p>
            <p class="lihe"><span class="dack-color">存放详情：</span>{{detailData.details_of_storage}}</p>
            <p class="lihe"><span class="dack-color">消防设备：</span>{{detailData.ff_eqp_name}}</p>
        </div>
        <!-- 其他要求 -->
        <div class="park-intro">
            <p class="dack-color">其他要求:</p>
            <p style="padding-top:10px;">{{detailData.other_needs}}</p>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  props: {
    detailData: ""
  },
  methods: {
    // 获取详情
    getDetail() {
      this.$Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      this.$axios
        .get(`/v1/demand/read?id=${this.$route.query.id}`)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.detailData = res.data.data;
          } else {
            this.$Toast(res.data.message);
          }
          this.$Indicator.close();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created () {
    this.getDetail();
  },
};
</script>
<style lang="scss">
.detail-info-wrapper {
  padding-left: 20px;
  font-size: 14px;
  p {
    color: #696969;
  }
  ul li {
    color: #696969;
  }
  .dack-color {
    color: #a0a0a0;
  }
}
.list-flex-de{
    border-bottom: 1px solid #eee;
}
.list-flex-de ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 48%;
    line-height: 2.5;
  }
}
.list-flex-de .list-flex-ul{
    li{
        line-height: 4;
    }
}
.lihe{
    display: block;
    line-height: 4;
}
.park-intro{
    padding-top: 10px;
    p {
        padding-right: 20px;
    }
}
</style>
