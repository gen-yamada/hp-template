<template>
  <div class="footer box">
    <div class="footer-info contain fadeInUp">
      <div class="footer-img-box">
        <img class="footer-img" src="/images/main.jpg" alt="ほんだ動物病院ロゴ">
      </div>
      <div class="footer-text-box">
        <div class="footer-text">
          <img class="footer-img btn" src="/images/map.svg">
          <p>〒185-0031<br>東京都国分寺市富士本1-22-2<br>国立駅より徒歩７分</p>
        </div>
        <div class="footer-text">
          <img class="footer-img btn" src="/images/phone.svg">
          <p>ご予約はこちら<br>042-577-3344</p>
        </div>
      </div>
    </div>
    <div class="footer-nav fadeInUp">
      <ul class="footer-nav-ul contain">
        <li class="footer-nav-li"><nuxt-link to="/"><img class="img-right" src="/images/right.svg">はじめに</nuxt-link></li>
        <li class="footer-nav-li"><nuxt-link to="/medical"><img class="img-right" src="/images/right.svg">診療案内</nuxt-link></li>
        <li class="footer-nav-li"><nuxt-link to="facility"><img class="img-right" src="/images/right.svg">施設案内</nuxt-link></li>
        <li class="footer-nav-li"><nuxt-link to="/news"><img class="img-right" src="/images/right.svg">お知らせ</nuxt-link></li>
      </ul>
    </div>
    <div class="footer-bottom fadeInUp">
      <p class="footer-bottom-text">Copyright © Honda Animal Clinic. All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
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
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.footer {
  z-index: 90;
  background-color: $light-green;
  @include containTop;

  .footer-info {
    @include wrap;

    .footer-img-box {
      @include center;
      .footer-img {
        width: 200px;
      }
    }
    .footer-text-box {
      .footer-text {
        p {
          @include description;
          color: $black;
        }
        .footer-img {
          margin-right: 15px;
        }
      }
    }
  }
  .footer-nav {

    .footer-nav-ul {
      border-top: 1px solid $green;
      @include contain;
      @include wrap;

      .footer-nav-li {
        a {
          @include center;
          @include description;
          color: $black;

          .img-right {
            width: 11px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .footer-bottom {
    @include center;
    height: 50px;
    background-color: $green;

    .footer-bottom-text {
      color: $white;
      @include small;
    }
  }
}
</style>
