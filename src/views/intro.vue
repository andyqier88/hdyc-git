<template>
  <div class="intro-us">
      <div class="intro-logo">
          <img src="./../assets/1.png" alt="">
      </div>
      <p>恒道云仓，专注于仓储互联网化的网络平台，仓库资源多，种类全，覆盖全国。
找仓库，就到恒道云仓。</p>
        <!-- <p class="tel">官方电话：0371-67897856</p> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.intro-logo{
    padding: 40px 0;
    text-align: center;
    border-bottom: 1px solid #f9f9f9;
    img{
        width: 80px;
        margin: 0 auto;
    }
}
.intro-us{
    p{
        line-height: 2;
        padding: 30px 15px 0;
    }
    .tel{
        color: #999;
        margin-top: 30px;
        text-align: center;
    }
}
</style>
