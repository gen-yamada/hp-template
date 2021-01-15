<template>
  <div class="header">
    <div class ="header-box">
      <img class ="header-img" src="/images/main.jpg">
      <div class ="phone-box">
        <img class ="phone-img" src="/images/phone.svg">
        <p class ="phone-number">042-577-3344</p>
      </div>
    </div>
    <ul class ="header-menu">
      <li class="header-nav"><a><img class="img-right" src="/images/right.svg">はじめに</a></li>
      <li class="header-nav"><a><img class="img-right" src="/images/right.svg">診療案内</a></li>
      <li class="header-nav"><a><img class="img-right" src="/images/right.svg">施設案内</a></li>
      <li class="header-nav"><a><img class="img-right" src="/images/right.svg">アクセス</a></li>
      <li class="header-nav"><a><img class="img-right" src="/images/right.svg">お知らせ</a></li>
    </ul>
    <div class="sp-nav" :class="{sidenavon: show}">
      <ul class ="sp-header-menu">
        <li class="sp-nav-li"><a><img class="sp-img-right" src="/images/right.svg">はじめに</a></li>
        <li class="sp-nav-li"><a><img class="sp-img-right" src="/images/right.svg">診療案内</a></li>
        <li class="sp-nav-li"><a><img class="sp-img-right" src="/images/right.svg">施設案内</a></li>
        <li class="sp-nav-li"><a><img class="sp-img-right" src="/images/right.svg">アクセス</a></li>
        <li class="sp-nav-li"><a><img class="sp-img-right" src="/images/right.svg">お知らせ</a></li>
      </ul>
    </div>
    <div class="hamburger" @click="toggleShow" :class="{active: show}">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show
      },
    },
  }
</script>

<style lang="scss">
.header {
  width: 100%;
  height:15%;
  background-color: $white;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  .header-box {
    display: flex;
    align-items: center;
    .header-img {
      width: 200px;
      height: 100px;
      margin: 20px;
    }
    .phone-box {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      margin-top: 55px;
      .phone-img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .phone-number {
        color: $black;
        font-size: $description;
      }
    }
  }
  .header-menu {
    padding-top: 70px;
    @include wrap;
    margin: 0 0 0 auto;
    .header-nav {
      a {
        color: $black;
        @include center;
        font-size: 20px;
        margin-right: 50px;
        .img-right {
          width: 11px;
          margin-right: 10px;
        }
      }
    }
  }
  .sp-nav{
    display: none;
  }

  @media screen and (max-width:759px) { 
    .header {
      width: 100px;
      height: 20px;
    }
    .header-menu {
		  display: none;
    }
    .phone-img {
      display: none;
    }
    .phone-number {
      display: none;
    }
    .hamburger {
      position: relative;
      display: block;
      width: 30px;
      height: 25px;
      margin: 0 0 0 auto;
      span {
        width: 26px;
        height: 2px;
        display: block;
        background: $black;
        position: absolute;
        right: 20px;
        transition: all 0.5s;
        transform: rotate(0deg);
      }
      .top {
        transform: translateY(-8px);
      }
      .middle {
        transform: translateX(0px);
        transform: translateY(0px);
      }
      .bottom {
        transform: translateY(8px);
      }  
    }
    .active {
      .top {
        transform: rotate(-45deg) translateY(0px);
      }
      .middle {
        transform: translateX(100px);
        background: rgba(255, 255, 255, 0);
      }
      .bottom {
        transform: rotate(45deg) translateY(0px);
      }
    }
  }
  .sp-nav {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 500px;
    background-color: $green;
    opacity: 0;
    transition: all 0.5s;
    visibility: hidden;
  }
}
  
</style>
