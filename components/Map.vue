<template>
  <div class="map-container box">
    <GmapMap
      class="map contain"
      :center="center"
      :zoom="14"
      map-type-id="roadmap"
    >
      <GmapMarker
        :animation="2"
        :position="center"
        :clickable="false"
        :draggable="false"
      />
    </GmapMap>
    <div class="map-info contain">
      <p class="map-address">〒185-0031<br>東京都国分寺市富士本１丁目２２−２</p>
      <p class="map-text">国立駅より徒歩７分</p>
      <p class="map-text">お車でお越しの際は駐車場をご利用ください</p>
    </div>
  </div>
</template>
<script>
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps"
import Vue from "vue"
Vue.use(VueGoogleMaps, {
  load: {
    key: `${ process.env.API }`,
    libraries: "places",
  },
})
import FadeInUp from '../mixins/fadeinup.js'
export default {
  data() {
    return {
      center: {
        lat: 35.4122,
        lng: 139.4130
      }
    }
  },
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.map-container {
  @include contain;
  background-color: $back;

  .map {
    height: 300px;
  }
  .map-info {
    padding: 20px;
    border-radius: 0 0 25px 25px;
    background-color: $white;
    @include border;

    .map-address {
      @include description;
      padding-bottom: 20px;
    }
    .map-text {
      @include description;
      opacity: 0.5;
    }
  }
}
</style>
