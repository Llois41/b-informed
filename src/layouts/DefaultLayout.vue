<script setup lang="ts">

</script>

<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/about'">About</router-link>
    </nav>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <footer class="LayoutDefault__footer">
      Made with 💙 by Llois41
    </footer>
  </div>
</template>
