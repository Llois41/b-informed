<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { computed } from 'vue';

const { loginWithRedirect: login, logout, user, isAuthenticated } = useAuth0();

const isLoggedIn = computed(() => isAuthenticated.value);

const authButtonText = computed(() => (isLoggedIn.value ? 'Logout' : 'Login'));

async function onAuthButtonClicked() {
  if (isLoggedIn.value) {
    return await logout({ logoutParams: { returnTo: 'http://localhost:5173' } });
  }
  return login();
}
</script>

<template>
  <h1>Welcome to HomePage</h1>
  <div>
    <button @click="onAuthButtonClicked">{{ authButtonText }}</button>
    <div v-if="isLoggedIn">
      <p>Welcome {{ user.name }}</p>
    </div>
  </div>
</template>
