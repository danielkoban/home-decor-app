<template>
  <div class="camera">
    <video autoplay></video>
    <button></button>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "Camera",
  setup() {
    function init() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get Media Devices");
      }
    }

    onMounted(() => {
      init();
    });

    return {
      init,
    };
  },
};
</script>

<style>
</style>