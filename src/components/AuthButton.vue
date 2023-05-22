<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { computed } from 'vue';

const { loginWithRedirect: login, logout, user, isAuthenticated } = useAuth0();
const authButtonText = computed(() => (isAuthenticated.value ? 'Logout' : 'Login'));

async function onAuthButtonClicked() {
  if (isAuthenticated.value) {
    return await logout({ logoutParams: { returnTo: 'http://localhost:5173' } });
  }
  return login({ appState: { target: '/about' } });
}
</script>

<template>
  <button type="button" @click="onAuthButtonClicked">{{ authButtonText }}</button>
  <div v-if="isAuthenticated">
    <p>Welcome {{ user.name }}</p>
  </div>
</template>
