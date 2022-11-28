/* So we are able to be "logged in" on all pages. A package downloaded */

import { createNuxtPersistedState } from "pinia-plugin-persistedstate/nuxt";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie));
});
