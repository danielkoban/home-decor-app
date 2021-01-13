<template>
  <li
    v-for="item in items"
    :key="item.id"
    class="flex-shrink-0 w-3/12 flex justify-center items-center"
  >
    <img :src="item.url" alt="" class="p-6" />
  </li>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);

    return { items };
  },
};
</script>

<style>
</style>