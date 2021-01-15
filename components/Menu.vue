<template>
  <div class="menu phone fadeInUp">
    <nuxt-link v-for="menu in menus" :key="menu.index" :to="menu.to" class="menu-btn">
      <img class="menu-img btn" :src="menu.img">
      <p class="menu-text">{{menu.text}}</p>
    </nuxt-link>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  data() {
    return {
      menus: [
        { to: "/medical",text: "診療案内",img: "/images/scope.svg" },
        { to: "/facility",text: "施設案内",img: "/images/clinic.svg" },
        { to: "/news",text: "お知らせ",img: "/images/note.svg" },
      ],
    }
  },
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.menu {
  @include wrap;
  @include contain;
  background-color: $light-green;

  .menu-btn {
    width: 21%;
    margin: 0 2%;
    background-color: $white;
    padding: 15px 0;
    @include radius;
    @include columnCenter;
    @include shadow;

    .menu-img {
      margin-bottom: 10px;
    }

    .menu-text {
      @include sub;
      color: $green;
    }
  }
}

</style>
