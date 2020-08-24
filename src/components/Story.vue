<template>

      <div class="container has-text-centered">
        <h1 class="title">
             {{ title }}
        </h1>
        <h2 class="subtitle has-text-left">
          {{ story }}
        </h2>
      </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    title: String,
    story: String,
  },
};
</script>

<style>

</style>
