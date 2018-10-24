<template>
<!-- eslint-disable -->
    <div class="fixed-bottom">
		<a href="tel:0000" class="to-call">电话客服</a>
        <span class="online-contact">在线咨询</span>
    </div>
</template>
<style lang="scss">

.fixed-bottom{
    display: flex;
    width: 100%;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
    background: #fff;
    border-top: 1px solid #e6e6e6;
    .to-call {
        flex: 1;
        padding-top: 30px;
        color: #6b7072;
        background: url('./../assets/phone.png') no-repeat 55px 7px;
        background-size: 22px 22px;
    }
    .online-contact {
        flex: 2;
        display: block;
        height: 44px;
        border-radius: 4px;
        margin-top: 5px;
        margin-right: 10px;
        float: right;
        text-align: center;
        background: #dd5321;
        color: #fff;
        line-height: 44px;
        font-size: 15px;
}
}
</style>
