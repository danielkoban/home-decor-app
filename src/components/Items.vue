<template>
  <ul class="mx-auto absolute bottom-28 w-full flex overflow-x-auto z-20">
    <li
      v-for="item in items"
      :key="item.id"
      class="flex-shrink-0 w-3/12 flex justify-center items-center"
    >
      <img :src="item.url" alt="" class="p-6" />
    </li>
  </ul>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const items = reactive([
      {
        id: 1,
        url:
          "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 2,
        url:
          "https://images.pexels.com/photos/5627275/pexels-photo-5627275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 3,
        url:
          "https://images.pexels.com/photos/5624326/pexels-photo-5624326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      {
        id: 4,
        url:
          "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 5,
        url:
          "https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style>
</style>