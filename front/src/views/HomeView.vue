<script setup lang="ts">
import {stockRoutePrefix} from "@/stock/stock.route";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main>
    <h1>Gérer efficacement votre stock</h1>
    <RouterLink :to="{ name: `${stockRoutePrefix}.list`}" class="button primary">
      <span>Voir le stock</span>
      <FontAwesomeIcon icon="fa-chevron-right" />
    </RouterLink>
  </main>
</template>


<style scoped>
main{
  flex-grow: 0;
}
a{
  span{
    margin-right: 15px;
  }
}
</style>
