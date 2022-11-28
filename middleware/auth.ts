import { useUserStore } from "~~/store/user";

const store = useUserStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client && store.token === null) {
    return navigateTo("login");
  }
});
