<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns is-multiline">
        <div class="column">
          <div class="container">
            <figure class="image">
              <img src="../assets/svg/about.svg">
            </figure>
          </div>
        </div>

      <div class="column">
          <Story
            v-for="about in abouts"
            :key="about.id"
            v-bind:story="about.story"
            v-bind:title="about.title"
          />
      </div>
     </div>
    </div>
  </section>
</template>
<script>
import api from '../api';
const abouts = api.getAbout();

import Story from '../components/Story.vue';

export default {
  name: 'About',
  components: {
    Story,
  },
  data() {
    return {
     abouts: abouts,
    };
  },
  mounted() {
  },
};
</script>
