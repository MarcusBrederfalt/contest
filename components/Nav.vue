<script>
import { useUserStore } from "~~/store/user";

definePageMeta({
  middleware: "auth",
});

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  methods: {
    rest() {
      this.userStore.resetToken();
    },
    async login() {
      await this.userStore.logIn(this.email, this.password);
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <header>
    <h2>
      <a href="#"><img src="/img/logo.webp" /></a>
    </h2>

    <div v-if="userStore.getToken">
      <nav>
        <li><NuxtLink to="/home">Home</NuxtLink></li>

        <li><NuxtLink to="/sports">Sports</NuxtLink></li>

        <li><NuxtLink to="/user">User</NuxtLink></li>

        <li>
          <NuxtLink to="#" @click="rest">Logout</NuxtLink>
        </li>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div
      class="background-image"
      style="background-image: url(/img/IMG_9337.jpg)"
    ></div>
    <h1>Knowe Contest</h1>
  </section>
</template>

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

logo-img {
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

/*-------------
 	Header
-------------*/

header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 35px 100px 0;
}

header h2 {
  font-family: "Quicksand", sans-serif;
}

header nav {
  display: flex;
}

header nav li {
  margin: 0 15px;
}

header nav li:first-child {
  margin-left: 0;
}

header nav li:last-child {
  margin-right: 0;
}

@media (max-width: 1000px) {
  header {
    padding: 20px 50px;
  }
}

@media (max-width: 700px) {
  header {
    flex-direction: column;
  }

  header h2 {
    margin-bottom: 15px;
  }
}

/*----------------
 	Hero Section
----------------*/

.hero {
  position: relative;
  justify-content: center;
  min-height: 50vh;
  color: #fff;
  text-align: center;
}

.hero .background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #2196f3;
  z-index: -1;
}

.hero .background-image:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #414a4f;
  opacity: 0.75;
}

.hero h1 {
  font: bold 60px "Open Sans", sans-serif;
  margin-bottom: 15px;
}

.hero h3 {
  font: normal 28px "Open Sans", sans-serif;
  margin-bottom: 40px;
}

.hero a.btn {
  padding: 20px 46px;
}

@media (max-width: 800px) {
  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 48px;
  }

  .hero h3 {
    font-size: 24px;
  }

  .hero a.btn {
    padding: 15px 40px;
  }
}
</style>
