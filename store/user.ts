/* 

Pinia store, here the token is set upon login.

*/

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    logInError: null,
    sportCreated: false,
    sports: [],
  }),

  persist: true,

  getters: {
    getToken(state) {
      return state.token;
    },

    getlogInError(state) {
      return state.logInError;
    },
  },

  /* Login, if succesful the user is directed to /home, if not logInError is set to true and an error message shows. */

  actions: {
    async logIn(email, password) {
      const res = await fetch(/* insert url */, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();

      if (!user.success) {
        this.logInError = true;
      } else {
        this.token = user.data.token;
        navigateTo("/home");
      }
    },

    /* Method to set the token to null and there by log out the user, redirects to /login */

    resetToken() {
      this.logInError = null;
      this.token = null;
      navigateTo("/login");
    },
  },
});
