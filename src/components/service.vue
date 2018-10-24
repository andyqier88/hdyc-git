<template>
    <div class="service-wrapper">
        <split></split>
        <div>
            <h3>设施服务</h3>
            <div class="serve-list">
                <p  ><span class="room"></span></p>
                <p>办公室</p>
              </div>
        </div>
        <split></split>
        <div>
            <h3>安保服务</h3>
            <div class="serve-list">
                <p ><span class="fire"></span></p>
                <p>消防联动</p>
            </div>
            <div class="serve-list">
                <p ><span class="leave"></span></p>
                <p>紧急疏散</p>
            </div>
            <div class="serve-list">
                <p ><span class="spray"></span></p>
                <p>喷淋</p>
            </div>
        </div>
        <split></split>
        <!-- <div>
            <h3>消防服务</h3>
            <div class="serve-list">
                <p ><span class="room"></span></p>
                <p>办公室</p>
            </div>
            <div class="serve-list">
                <p ><span class="room"></span></p>
                <p>办公室</p>
            </div>
            <div class="serve-list">
                <p ><span class="room"></span></p>
                <p>办公室</p>
            </div>
            <div class="serve-list">
                <p ><span class="room"></span></p>
                <p>办公室</p>
            </div>
            <div class="serve-list">
                <p ><span class="room"></span></p>
                <p>办公室</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import split from '@/components/split.vue'
export default {
  data () {
    return {}
  },
  components: {
    split
  }
}
</script>
<style lang="less">
.service-wrapper {
  padding-left: 10px;
  margin-bottom: 50px;
}
.serve-list {
  display: inline-block;
  width: 23%;
  text-align: center;
  margin: 10px 0;
  font-size: 14px;
  p {
      color: #a0a0a0;
    &:first-child {
      display: inline-block;
    }
  }
  p {
      span{
          display: inline-block;
          &:first-of-type{
            display: inline-block;
            width: 36px;
            height: 36px;
            // margin: 0 auto .1rem;
            background-image: url('./../assets/sprise.png');
            background-repeat: no-repeat;
          }
      }
  }
  .water {
    background-position: 0 0;
}

.ele {
    background-position: -36px 0;
}

.rain {
    background-position: -72px 0;
}

.wind {
    background-position: -108px 0;
}

.cut {
    background-position: -144px 0;
}

.equip {
    background-position: -180px 0;
}

.operate {
    background-position: -216px 0;
}

.send {
    background-position: -252px 0;
}

.dash {
    background-position: -288px 0;
}

.goods {
    background-position: -324px 0;
}

.again {
    background-position: -360px 0;
}

.room {
    background-position: -396px 0;
}

.live {
    background-position: -432px 0;
}

.park {
    background-position: -468px 0;
}

.eat {
    background-position: -504px 0;
}

.fire {
    background-position: -540px 0;
}

.light {
    background-position: -576px 0;
}

.leave {
    background-position: -612px 0;
}

.cross {
    background-position: -648px 0;
}

.hot {
    background-position: -684px 0;
}

.spray {
    background-position: -720px 0;
}

.red-line {
    background-position: -756px 0;
}

.center {
    background-position: -792px 0;
}

.guard {
    background-position: -828px 0;
}

.police {
    background-position: -864px 0;
}

.close {
    background-position: -900px 0;
}

.door {
    background-position: -936px 0;
}

}
</style>
