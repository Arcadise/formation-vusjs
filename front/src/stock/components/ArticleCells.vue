<script setup lang="ts">
  import type {Article} from "@/stock/interfaces/articles";

  const model = defineModel<Article>({required: true})
</script>

<template>
  <td>{{model.name}}</td>
  <td>{{model.price}}€</td>
  <td>
    <input type="text" v-model="model.qty">
  </td>
</template>

<style scoped>

</style>
