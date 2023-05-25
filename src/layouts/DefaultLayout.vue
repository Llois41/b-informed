<script setup lang="ts">
import { VApp } from 'vuetify/components';
import Navbar from '../components/navigation/Navbar.vue';
import TopicNavigation from '../components/side-nav/TopicNavigation.vue';
</script>

<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <TopicNavigation />
        <main class="LayoutDefault__main">
          <slot />
        </main>
      </v-container>
    </v-main>
    <v-footer>
      <footer class="LayoutDefault__footer">Made with 💙 by Llois41</footer>
    </v-footer>
  </v-app>
</template>
