<template>
  <camera @take-picture="takePicture"></camera>
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
  setup() {
    function takePicture() {
      console.log("take a picture");

      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth;
      picture.height = window.innerHeight;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );
    }

    return {
      takePicture,
    };
  },
};
</script>

<style src="./assets/tailwind.css">
</style>
