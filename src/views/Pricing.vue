<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-left">


          <div class="columns">
              <div class="column is-1"></div>
              <div class="column is-11 has-text-left">
                  <h1 class="title">Pricing</h1>
                  <p class="subtitle">Choose what's right for your team and business to scale</p>
              </div>
          </div>

      </div>
    </div>

   <div class="columns">
         <div class="column is-1"></div>
         <div class="column is-10">


    <div class="columns is-multiline">

      <Package
        v-for="info in infos"
        :key="info.id"
        v-bind:title="info.title"
        v-bind:description="info.description"
        v-bind:price="info.price"
        v-bind:period="info.period"
        v-bind:items="info.items"
        v-bind:pricenote="info.pricenote"
        v-bind:packagenote="info.packagenote"
      />
     </div>



      </div>
      <div class="column is-1"></div>
   </div>

  </section>
</template>

<script>
import api from '../api';
import Package from '../components/Package.vue';

const packages = api.getPackages();

export default {
  name: 'Project',
  components: {
    Package,
  },
  data() {
    return {
      infos: [],
    };
  },
  mounted() {
    for (let i = 0; i < packages.length; i++) {
      this.infos.push(packages[i]);
    }
  },
};
</script>

<style>
  footer {
    margin-top: 50px;
  }
</style>
