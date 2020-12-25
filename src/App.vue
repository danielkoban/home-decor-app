<template>
  <camera></camera>
  <gallery></gallery>
</template>

<script>
import Camera from "./components/Camera.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Camera,
    Gallery,
  },
};
</script>

<style src="./assets/tailwind.css">
</style>
