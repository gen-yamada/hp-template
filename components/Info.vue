<template>
  <div class="info box">
    <div class="title-box contain fadeInUp">
      <span class="title-border" />
      <img class="title-img btn" src="/images/clock.svg">
      <p class="title">診療について</p>
      <span class="title-border" />
    </div>
    <table class="info-table contain fadeInUp">
      <tr>
        <td>診療時間</td>
        <td>月</td>
        <td>火</td>
        <td>水</td>
        <td>木</td>
        <td>金</td>
        <td>土</td>
        <td>日</td>
      </tr>
      <tr>
        <td>9:00 ~ 12:00</td>
        <td>●</td>
        <td>●</td>
        <td>-</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
      </tr>
      <tr>
        <td>15:00 ~ 18:30</td>
        <td>●</td>
        <td>●</td>
        <td>-</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
      </tr>
    </table>
    <div class="wrap-text-box contain fadeInUp">
      <p class="wrap-text">
        当院は終日予約診療です。
      </p>
      <p class="wrap-text">
        急な体調不良も、まずはお電話にてお問い合わせ下さい。
      </p>
    </div>
    <div class="info-contact-box contain fadeInUp">
      <p class="info-contact-text">ご予約、お問い合わせはこちら</p>
      <div class="info-contact">
        <img class="info-contact-img btn" src="/images/phone.svg">
        <p>042-577-3344</p>
      </div>
    </div>
  </div>
</template>
<script>
import FadeInUp from '../mixins/fadeinup.js'
export default {
  mixins: [ FadeInUp ]
}
</script>
<style lang="scss" scoped>
.info {
  @include contain;
  background-color: $back;

  .info-table {
    border-collapse: collapse;

    tr {
      td {
        border: solid 1px $black;
        text-align: center;
        line-height: 30px;
        font-size: $description;
        color: $black;
      }
    }
  }
  .wrap-text-box {
    text-align: center;
    padding: 20px 0;

    .wrap-text {
      color: $black;
      @include description;
    }
  }
  .info-contact-box {
    @include shadow;
    @include columnCenter;
    background-color: $white;
    max-width: 320px;
    height: 80px;
    border-radius: 50px;
    margin-top: 20px;

    .info-contact-text {
      @include main;
      color: $black;
    }
    .info-contact {
      @include center;

      .info-contact-img {
        margin-right: 15px;
      }
      p {
        @include large;
        color: $black;
      }
    }
  }
}

</style>
