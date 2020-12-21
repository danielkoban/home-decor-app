<template>
  <div class="camera">
    <video autoplay></video>
    <button>ELO</button>
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
        let constraints = {
          video: {
            height: { ideal: 1024 },
          },
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
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