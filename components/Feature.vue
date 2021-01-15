<template>
  <div class="feature box">
    <div class="feature-box contain">
      <div class="title-box fadeInUp">
        <span class="title-border" />
        <img class="title-img btn" src="/images/clock.svg">
        <p class="title">本院の特徴</p>
        <span class="title-border" />
      </div>
      <div class="feature-info fadeInUp">
        <div v-for="feature in features" :key="feature.index" class="features">
          <img class="features-img btn" :src="feature.img">
          <p class="features-text">{{feature.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  data() {
    return {
      features: [
        { text: "心臓病検査",img: "/images/scope.svg" },
        { text: "ペットホテル",img: "/images/scope.svg" },
        { text: "トリミング",img: "/images/scope.svg" },
        { text: "終日予約診療",img: "/images/scope.svg" },
        { text: "駐車場あり",img: "/images/scope.svg" },
      ],
    }
  },
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.feature {
  background-color: $back;

  .feature-box {
    background-color: $light-green;
    @include radius;
    @include contain;

    .feature-info {
      @include wrap;

      .features {
        padding: 20px 0;
        width: 33%;
        @include columnCenter;

        .features-img {
          margin-bottom: 20px;
        }

        .features-text {
          @include small;
        }
      }
    }
  }
}
</style>
