<script setup lang="ts">
import { getPathForRoute } from '../router/routes.ts';
import AuthButton from '../components/AuthButton.vue';
</script>

<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link :to="getPathForRoute('home')">Home</router-link>
      <router-link :to="getPathForRoute('about')">About</router-link>
      <AuthButton />
    </nav>
    <main class="LayoutDefault__main">
      <slot />
    </main>
    <footer class="LayoutDefault__footer">Made with 💙 by Llois41</footer>
  </div>
</template>
