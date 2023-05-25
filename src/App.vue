<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';

const title = 'b-informed';
</script>

<template>
  <div id="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>
