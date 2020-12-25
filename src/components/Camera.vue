<template>
  <div class="camera w-screen h-screen fixed z-10">
    <video autoplay class="w-screen h-screen object-cover"></video>
    <button
      class="w-16 h-16 mx-auto absolute inset-x-0 bottom-8 rounded-full border-4 focus:outline-none"
    ></button>
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
            width: {
              ideal: window.innerWidth,
            },
            height: {
              ideal: window.innerHeight,
            },
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