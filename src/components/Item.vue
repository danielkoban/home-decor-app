<template>
  <li
    v-for="item in items"
    :key="item.id"
    class="flex-shrink-0 w-3/12 flex justify-center items-center"
  >
    <img :src="item.url" alt="" class="p-6" @click="selectItem" />
  </li>
</template>

<script>
import vclone from "@/vclone/";

export default {
  setup() {
    const { items, selectItem } = vclone;

    return { items, selectItem };
  },
};
</script>

<style>
</style>