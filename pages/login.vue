<template>



<section class="layout">
    <h3 class="title">Authorize</h3>
    <p>
        <div v-if="userStore.getToken === null" class="card">
    <form @submit.prevent="login">
      <label>Email</label>
      <div class="input-container">
        <input type="text" v-model="email" />
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="userStore.getlogInError === true">
      <p>
        Wrong email or password entered,<br />
        please try again
      </p>
    </div>
  </div>
    </p>
    <hr />


  </section>

</template>

<script>
import { useUserStore } from "~~/store/user";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.userStore.logIn(this.email, this.password);
    },
  },
};
</script>

<style>
/*-------------
 	General
-------------*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font: normal 16px sans-serif;
  color: #555;
}

ul,
nav {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  opacity: 0.9;
}

img {
  width: 50%;
}

a:hover {
  opacity: 1;
}

a.btn {
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #2196f3;
  font-weight: 800;
  text-align: center;
}

hr {
  width: 150px;
  height: 2px;
  background-color: #2196f3;
  border: 0;
  margin-bottom: 80px;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 125px 100px;
}

@media (max-width: 1000px) {
  section {
    padding: 100px 50px;
  }
}

@media (max-width: 600px) {
  section {
    padding: 80px 30px;
  }
}

section h3.title {
  color: #414a4f;
  text-transform: capitalize;
  font: bold 32px "Open Sans", sans-serif;
  margin-bottom: 35px;
  text-align: center;
}

section p {
  max-width: 800px;
  text-align: center;
  margin-bottom: 35px;
  padding: 0 20px;
  line-height: 2;
}

ul.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/*--------------------
 	login section
---------------------*/

.layout {
  background-color: #fff;
}

.layout .grid li {
  padding: 20px;
  height: 350px;
  border-radius: 3px;

  background-clip: content-box;
  background-size: cover;
  background-position: center;
  background-color: #333;
}

.layout .grid li.small {
  flex-basis: 40%;
}

.layout .grid li.large {
  flex-basis: 60%;
}

@media (max-width: 1000px) {
  .login .grid li.small,
  .login.grid li.large {
    flex-basis: 100%;
  }
}


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



@media (max-width: 1000px) {
  .features .grid li {
    flex-basis: 70%;
    margin-bottom: 65px;
  }

  .features .grid li:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 600px) {
  .features .grid li {
    flex-basis: 100%;
  }
}






</style>
