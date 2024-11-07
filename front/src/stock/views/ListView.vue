<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraichir">
          <FaIcon icon="fa-rotate-right" />
        </button>
        <RouterLink class="button" :to="{name : `${stockRoutePrefix}.add`}">
          <FaIcon icon="fa-plus" />
        </RouterLink>
        <button title="Supprimer">
          <FaIcon icon="fa-trash-can" />
        </button>
      </nav>
      <div class="error"></div>
      <table>
        <thead>
        <tr>
          <th class="name">Nom</th>
          <th class="price">Prix</th>
          <th class="qty">Qte</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Nom 1</td>
          <td>1.24€</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Nom 2</td>
          <td>1.24€</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor.</td>
          <td>2.65€</td>
          <td>15</td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup lang="ts">
import {stockRoutePrefix} from "@/stock/stock.route";
</script>

<style scoped>
nav {
  display: flex;
  column-gap: 5px;
}

div.error {
  height: 2rem;
}

</style>
