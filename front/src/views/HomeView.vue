<script setup lang="ts">
import {stockRoutePrefix} from "@/stock/stock.route";
</script>

<template>
  <main>
    <h1>Gérer efficacement votre stock</h1>
    <RouterLink :to="{ name: `${stockRoutePrefix}.list`}" class="button primary">Voir le stock</RouterLink>
  </main>
</template>


<style scoped>
main{
  flex-grow: 0;
}
</style>
