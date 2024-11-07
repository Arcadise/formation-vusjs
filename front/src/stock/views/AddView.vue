<script setup lang="ts">
  import {ref} from "vue";
  import type {NewArticle} from "@/stock/interfaces/articles";
  import {useArticleStore} from "@/stock/store/articleStore";
  import {useRouter} from "vue-router";
  import {stockRoutePrefix} from "@/stock/stock.route";

  const store = useArticleStore()
  const router = useRouter()
  const newArticle = ref<NewArticle>({
    name: 'Truc',
    price: 0,
    qty : 0
  })

  const handleSubmit =  async () => {
    await store.add(newArticle.value)
    await router.push({name: `${stockRoutePrefix}.list`})
  }
</script>

<template>
  <main>
    <h1>Ajout d'un article</h1>
    <form v-on:submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" name="" id="" v-model="newArticle.name">
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" name="" id="" v-model="newArticle.price">
        <span class="error"></span>
      </label>
      <label>
        <span>Qté</span>
        <input type="number" name="" id="" v-model="newArticle.qty">
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button type="submit" class="primary">
        <FaIcon icon="fa-plus" />
        <span>Ajouter un article</span>
      </button>
    </form>
  </main>
</template>


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
