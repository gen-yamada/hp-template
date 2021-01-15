<template>
  <div class="facility-body box">
    <div class="title-box fadeInUp">
      <span class="title-border" />
      <img class="title-img btn" src="/images/clinic.svg">
      <p class="title">各施設について</p>
      <span class="title-border" />
    </div>
    <p class="facility-description">写真をクリックすると詳細が表示されます</p>
    <div v-if="this.window" class="infowindow-facility" @click="toggleInfo()">
      <div class="toggle-back" />
      <img :src="back.img" :alt="back.text" class="infowindow-img">
      <p class="infowindow-text">{{ back.text }}</p>
    </div>
    <div class="facility-box contain">
      <div v-for="facility in facilities" :key="facility.index" class="facility-gallery fadeInUp">
        <img class="facility-img" :src="facility.img" :alt="facility.text" @click="onInfoWindow(facility); toggleInfo()">
        <p class="facility-text">{{ facility.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  data() {
    return {
      facilities: [
        { text: "ほんだ動物病院の外観",img: "/images/clinic.jpg" },
        { text: "待合室",img: "/images/facility.jpg" },
        { text: "待合室2",img: "/images/facility2.jpg" },
        { text: "手術・検査室",img: "/images/medical.jpg" },
        { text: "診察室",img: "/images/medical2.jpg" },
        { text: "トリミング室",img: "/images/trim.jpg" },
        { text: "病院裏駐車場",img: "/images/parking.jpg" },
        { text: "コインパーキング",img: "/images/parking2.jpg" },
        { text: "商店会駐車場",img: "/images/parking3.jpg" },
      ],
      back: {
        text:"", img: ""
      },
      window: false,
    }
  },
  methods: {
    onInfoWindow(facility) {
      this.back.text = facility.text
      this.back.img = facility.img
    },
    toggleInfo() {
      this.window = !this.window
    }
  },
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.facility-body {
  @include contain;

  .facility-description {
    text-align: center;
    @include description;
    padding-bottom: 25px;
    opacity: 0.5;
  }

  .infowindow-facility {
    z-index: 1000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include columnCenter;

    .toggle-back {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $light-green;
      opacity: 1;
    }

    .infowindow-img {
      width: 100%;
      z-index: 100;
    }

    .infowindow-text {
      z-index: 100;
    }
  }

  .facility-box {
    @include wrap;

    .facility-gallery {
      width: 50%;
      text-align: center;
      padding-bottom: 25px;

      .facility-img {
        width: 95%;
        @include border;
        @include radiusS;
      }
      .facility-text {
        @include small;
      }
    }
  }
}
</style>
