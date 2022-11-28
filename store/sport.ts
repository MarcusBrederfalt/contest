/* Pinia store for sports */

import { defineStore } from "pinia";
import { useUserStore } from "~~/store/user";

const GET_URL = "https://localhost:5001/api/v1/Sport";

export const sportStore = defineStore("sport", {
  state: () => ({
    sportCreated: false,
    sports: [],
  }),

  getters: {
    getsports: (state) => {
      return state.sports;
    },
    getSportCreated: (state) => {
      return state.sportCreated;
    },
  },

  /* Create sport, sportCreated is set to true when if successful */

  actions: {
    async createSport(name, description) {
      let userStore = useUserStore();
      const res = await fetch(GET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userStore.getToken}`,
        },
        body: JSON.stringify({ name, description }),
      });

      const createSport = await res.json();
      console.log(createSport);
      this.sportCreated = true;
    },

    /* Get all sports from database */
    async getSports() {
      let userStore = useUserStore();

      const data = await fetch(GET_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userStore.getToken}`,
        },
      });
      const res = await data.json();

      this.sports = res.data;
      console.log(this.sports);
    },
  },
});
