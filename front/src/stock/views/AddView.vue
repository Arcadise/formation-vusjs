<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" name="" id="">
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" name="" id="">
        <span class="error"></span>
      </label>
      <label>
        <span>Qté</span>
        <input type="number" name="" id="">
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button type="submit" class="primary">Ajouter un article</button>
    </form>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
  form{
    display: flex;
    flex-flow: column;
    row-gap: 0.25rem;
    width: 100%;
    max-width: 25rem;
  }
  label{
    display: flex;
    flex-flow: column;

  }
  span.error{
    height: 1rem;
  }
  div.error{
    height: 3rem;
  }

  input{
    padding: 0.5rem 1rem;
    border: 0.1rem solid #aaa;
    border-radius: 0.3rem;
  }

</style>
