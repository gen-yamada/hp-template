<template>
  <div class="caption box">
    <div class="caption-box fadeInUp">
      <img :src="captionSrc" :alt="captionAlt" class="caption-img" />
      <div class="caption-text">
        <h1>{{ title }}</h1>
        <p>{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  props: [ 'captionSrc', 'captionAlt', 'title', 'subTitle' ],
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.caption {
  @include contain;
  background-color: $back;

  .caption-box {
    position: relative;

    .caption-img {
      display: block;
      width: 75%;
      margin: 0 0 0 auto;
      @include radiusL;
      @include border;
    }

    .caption-text {
      background-color: $white;
      @include border;
      padding: 20px;
      position: absolute;
      bottom: -5%;
      left: 5%;
      @include radius;

      h1 {
        color: $black;
        font-size: 22px;
      }
      p {
        color: $green;
        @include sub;
      }
    }
  }
}
</style>