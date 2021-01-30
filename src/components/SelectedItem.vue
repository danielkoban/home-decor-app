<template>
  <img
    class="selected-item w-40 lg:w-80 mx-auto absolute top-28 lg:top-52 inset-x-0 z-50"
    :src="currentItem"
    alt="Your item"
    crossorigin="anonymous"
  />
</template>

<script>
import vclone from "@/vclone/";

export default {
  name: "SelectedItem",

  setup() {
    const { currentItem } = vclone;

    return {
      currentItem,
    };
  },
};
</script>

<style>
</style>