<template>
  <div>
    <Caption captionSrc="/images/mona.jpg" captionAlt="ほんだ動物病院の外観" title="お知らせ" subTitle="News" />
    <p v-for="news in newses" :key="news.index">{{news.description}}</p>
  </div>
</template>

<script>
import FadeInUp from '../../mixins/fadeinup.js'
export default {
  data () {
    return {
      newses: null,
    }
  },
  mounted () {
    fetch('https://script.google.com/macros/s/AKfycbzmSG0Zzi8p9OPJTw-OsUxI46BuXOJvF04-diQAlu4wR4wbDbZd/exec')
    .then(res => res.json())
    .then(
      result => {
        this.newses = result
      },
      error => {
        console.log("error")
      },
      );
  },
  mixins: [ FadeInUp ]
}
</script>

<style>
</style>
