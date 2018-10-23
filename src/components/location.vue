<template>
    <div>
        <!-- 地理位置 -->
        <p>朝阳区 - 北京产阳区</p>
        <map name=""></map>
        <div>
            <ul>
                <li v-for="(item,key) in locaTab" :key="item.index">{{key}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      locaTab: [{ hignway: '高速' }, { airport: '机场' }, { shopmall: '商圈' }]
    }
  }
}
</script>
