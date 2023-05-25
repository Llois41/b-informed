<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { computed } from 'vue';

const { loginWithRedirect: login, logout, user, isAuthenticated, isLoading } = useAuth0();
const authButtonText = computed(() => (isAuthenticated.value ? 'Logout' : 'Login'));
const authIsLoading = computed(() => isLoading.value);

async function onAuthButtonClicked() {
  if (isAuthenticated.value) {
    return await logout({ logoutParams: { returnTo: 'http://localhost:5173' } });
  }
  return login({ appState: { target: '/about' } });
}
</script>

<template>
  <template v-if="authIsLoading"> <v-btn :loading="authIsLoading" :disabled="authIsLoading"> </v-btn> </template>
  <template v-else-if="isAuthenticated">
    <v-btn variant="outlined" prepend-icon="mdi-plus" :ripple="false" @click="onAuthButtonClicked">{{
      authButtonText
    }}</v-btn>
  </template>
  <template v-else>
    <v-btn variant="outlined" :ripple="false" @click="onAuthButtonClicked">{{ authButtonText }}</v-btn>
  </template>
</template>
