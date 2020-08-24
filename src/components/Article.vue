<template>
<swiper-slide>
  <div class="column is-fullwidth">
    <div v-tilt class="box">
      <div class="card-content">
        <div class="media card-adjusted">
          <div class="media-content  has-text-centered">
            <p class="title is-4">{{ title }}</p>
          </div>
        </div>
        <div class="content has-text-left">
          <p id="desc">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</swiper-slide>
</template>

<script>

import { SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Article',
  components: {
    SwiperSlide,
  },
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
  .box {
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .media {
    transform: translateZ(20px);
  }

  .stars-counter {
    color: #f1c40f
  }

  #desc {
    padding-top: 30px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .card-footer {
    margin-top: 10px;
    transform: translateZ(20px);
  }

  .card-footer a {
    color: hsl(0, 0%, 21%);
  }

</style>
