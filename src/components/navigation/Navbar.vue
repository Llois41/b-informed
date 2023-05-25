<script lang="ts" setup>
import AuthButton from './AuthButton.vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
</script>

<template>
  <div>
    <v-app-bar density="comfortable" rounded tag="nav">
      <v-app-bar-title>b-informed</v-app-bar-title>
      <p class="navbar__username">{{ user.name }}</p>
      <AuthButton></AuthButton>
    </v-app-bar>
  </div>
</template>

<style>
.navbar__username {
  padding-right: 20px;
}
</style>
