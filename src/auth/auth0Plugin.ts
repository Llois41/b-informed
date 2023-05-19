import { createAuth0 } from '@auth0/auth0-vue';

export const auth0Plugin = createAuth0({
  domain: 'b-informed.eu.auth0.com',
  clientId: '3i6PyoC1vsS6KUErMRU83PpBcgk3Fwc2',
  authorizationParams: {
    redirect_uri: 'http://localhost:5173/about',
  },
});
