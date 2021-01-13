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
export default {};
</script>

<style>
</style>