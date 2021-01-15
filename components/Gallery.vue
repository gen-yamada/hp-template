<template>
  <div class="gallery box">
    <Slick ref="slick" :options="slickOptions" class="gallery-box fadeInUp">
      <img
        v-for="image in images"
        :key="image.index"
        :src="image.src"
        :alt="image.alt"
      />
    </Slick>
  </div>
</template>
<script>
import Vue from "vue"
if (process.client) {
  Vue.component("Slick", require("vue-slick").default)
}
import FadeInUp from '../mixins/fadeinup.js'
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"
export default {
  data() {
    return {
      images: [
        { src: "/images/clinic.jpg", alt: "ほんだ動物病院の外観" },
        { src: "/images/tora.jpg", alt: "トラの写真" },
        { src: "/images/mona.jpg", alt: "モモとナナの写真" },
        { src: "/images/tora2.jpg", alt: "トラの写真２" },
        { src: "/images/nana.jpg", alt: "ナナの写真" },
      ],
      slickOptions: {
        slidesToShow: 1,
        autoplaySpeed: 1000,
        autoplay: true,
        arrows: true,
        fade: true,
        speed: 3000,
      },
    }
  },
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.gallery {
  @include contain;
  background-color: $back;
}
</style>
