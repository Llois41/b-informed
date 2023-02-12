<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';

const title = 'b-informed';
</script>

<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <DefaultLayout>
      <router-view/>
    </DefaultLayout>
  </div>
</template>
