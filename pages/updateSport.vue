<template>
  <div>
    <div v-for="sport of sport.getsports">
      <div class="card">
        <table class="tb">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>New name</th>
            <th>New description</th>
          </tr>

          <tr>
            <td>{{ sport.name }}</td>

            <td>{{ sport.description }}</td>

            <td><input type="text" v-model="name" /></td>
            <td><input type="text" v-model="description" /></td>
          </tr>
          <td>
            <v-btn elevation="1">
              <button
                type="submit"
                @click="
                  updateSport(
                    sport.id,
                    name,
                    description,
                    sport.name,
                    sport.description
                  )
                "
              >
                Update
              </button>
            </v-btn>
          </td>

          <td>
            <v-btn elevation="1">
              <button @click="getSports">Update list</button>
            </v-btn>
          </td>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "~~/store/user";
import { sportStore } from "~~/store/sport";
const URL = /* insert url */;

definePageMeta({
  middleware: "auth",
});

export default {
  setup() {
    const sport = sportStore();
    return { sport };
  },

  methods: {
    async getSports() {
      await this.sport.getSports();
    },

    async updateSport(id, name, description, sportName, sportDescription) {
      let userStore = useUserStore();

      if (name === undefined || name === null) {
        name = sportName;
      } else if (description === undefined || description === null) {
        description = sportDescription;
      }

      const update = {
        name: name,
        description: description,
      };

      const data = await fetch(URL + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userStore.getToken}`,
        },
        body: JSON.stringify(update),
      });
      const res = await data.json();
      const putTry = res;
      console.log(putTry.data);
    },
  },
};
</script>

<style></style>
