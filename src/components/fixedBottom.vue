<template>
    <div class="fixed-bottom">
        <span class="item1">电话客服</span>
        <span class="item2">在线咨询</span>
    </div>
</template>
<style lang="scss">
.fixed-bottom{
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    span{
        padding: 10px;
    }
    .item1{
        flex: 1;
        background: #fff;
    }
    .item2{
        flex: 2;
        background: #f78152;
        color: #fff;
        border-radius: 4px;
    }
}
</style>
