<template>
  <section class="layout">
    <h3 class="title">Welcome to Knowe Contest API</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis
      et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum
      sapien, id sagittis augue malesuada eu.
    </p>
    <hr />

    <ul class="grid">
      <li class="small" style="background-image: url(/img/IMG_9338.jpg)"></li>
      <li class="large" style="background-image: url(/img/IMG_9481.jpg)"></li>
      <li class="large" style="background-image: url(/img/IMG_9482.jpg)"></li>
      <li class="small" style="background-image: url(/img/IMG_9483.jpg)"></li>
    </ul>
  </section>
</template>

<style></style>

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
};
</script>
