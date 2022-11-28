<template>
  <div class="parent">
    <div class="div1">
      <div class="card">
        <h3>Create</h3>
        <br />
        <form @submit.prevent="postCreateSport" ref="createSportForm">
          <label>Name of sport</label>
          <div class="input-container">
            <input type="text" v-model="name" />
            <label>Description</label>
            <input type="text" v-model="description" />
          </div>
          <v-btn elevation="1">
            <button type="submit">Add</button>
          </v-btn>
        </form>
        <br />
        <div v-if="sport.getSportCreated === true">Created successfully.</div>
      </div>
    </div>
    <div class="div2">
      <div class="card">
        <v-card elevation="2">
          <h3>Get, update, delete sports</h3>
          <br />

          <v-btn elevation="1">
            <button type="submit" @click="getSports">Update list</button>
          </v-btn>
          <v-btn elevation="1">
            <button type="submit">
              <NuxtLink to="/updateSport">Update Sport</NuxtLink>
            </button>
          </v-btn>

          <p />

          <div v-for="sport of sport.getsports">
            <table class="tb">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{{ sport.name }}</td>
                <td>{{ sport.description }}</td>
              </tr>
              <v-btn elevation="1">
                <button type="submit" @click="deleteSport(sport.id)">
                  Click here for delete
                </button>
              </v-btn>
            </table>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { sportStore } from "~~/store/sport";
import { useUserStore } from "~~/store/user";
const URL_DELETE = "https://localhost:5001/api/v1/Sport/";

definePageMeta({
  middleware: "auth",
});

export default {
  setup() {
    const sport = sportStore();
    return { sport };
  },

  data() {
    return {
      name: "",
      description: "",
      sports: [],
    };
  },
  methods: {
    async getSports() {
      await this.sport.getSports();
    },

    async postCreateSport() {
      await this.sport.createSport(this.name, this.description);
      this.$refs.createSportForm.reset();
    },

    async deleteSport(id) {
      console.log(id);
      let userStore = useUserStore();

      const data = await fetch(URL_DELETE + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userStore.getToken}`,
        },
      });
      const res = await data.json();
      const sportDeleted = res;
      console.log(sportDeleted);
    },
  },
};
</script>

<style>
/*--------------------
    Main css for site
---------------------*/

.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;

  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*--------------------
    For create Sport
---------------------*/

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

.card {
  padding: 1rem;
  width: 20rem;
}

@media (max-width: 1000px) {
  .parent {
    display: block;
  }
}

@media (max-width: 600px) {
  .parent {
    display: block;
  }
}

/*--------------------
    For Table
---------------------*/

table.tb {
  width: 300px;
  border-collapse: collapse;
}
.tb th,
.tb td {
  border: solid 1px #777;
  padding: 5px;
}
.tb th {
  background: grey;
  color: white;
}
</style>
