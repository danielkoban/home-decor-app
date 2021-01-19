<template>
  <div class="camera w-screen h-screen fixed z-10">
    <video autoplay class="w-screen h-screen object-cover"></video>
    <selected-item v-if="currentItem"></selected-item>
    <button
      class="w-16 h-16 mx-auto absolute inset-x-0 bottom-8 rounded-full border-4 focus:outline-none"
      @click="takePicture"
    ></button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import SelectedItem from "./SelectedItem";
import vclone from "@/vclone/";

export default {
  name: "Camera",
  components: {
    SelectedItem,
  },
  setup(_, context) {
    const { currentItem } = vclone;

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

    function takePicture() {
      !currentItem.value
        ? alert("Choose a item")
        : context.emit("take-picture");
    }

    onMounted(() => {
      init();
    });

    return {
      init,
      takePicture,
      currentItem,
    };
  },
};
</script>

<style>
</style>