<template>
  <div class="sidebar">
    <p>sidebar</p>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.sidebar {
  background-color: $back;
  position: fixed;
  top: 0;
  width: 200px;
  height: 100%;
  z-index: 100;
  @include borderR;
  transition: all 0.5s;
}
</style>
