<template>
  <li
    v-for="item in items"
    :key="item.id"
    class="flex-shrink-0 w-3/12 md:w-2/12 flex justify-center items-center"
    :class="{ active: currentItem === item.url }"
  >
    <img :src="item.url" :alt="item.title" class="p-6" @click="selectItem" />
  </li>
</template>

<script>
import vclone from "@/vclone/";

export default {
  setup() {
    const { currentItem, items, selectItem } = vclone;

    return {
      currentItem,
      items,
      selectItem,
    };
  },
};
</script>

<style>
</style>