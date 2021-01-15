<template>
  <div>
    <Caption captionSrc="/images/facility.jpg" captionAlt="待合室" title="施設案内" subTitle="Facility Infomation" />
    <Facility />
    <div class="title-box box fadeInUp">
      <span class="title-border" />
      <img class="title-img btn" src="/images/access.svg">
      <p class="title">当院へのアクセス</p>
      <span class="title-border" />
    </div>
    <Access />
    <Map />
  </div>
</template>

<script>
import FadeInUp from '../../mixins/fadeinup.js'
export default {
  mixins: [ FadeInUp ]
}
</script>

<style>
</style>
