<script setup lang="ts">
import {stockRoutePrefix} from "@/stock/stock.route";
import {useArticleStore} from "@/stock/store/articleStore";
import {onMounted, ref} from "vue";
import type {ArticleIdType} from "@/stock/interfaces/articles";
import AsyncBtn from "@/widgets/AsyncBtn.vue";
import ArticleCells from "@/stock/components/ArticleCells.vue";

const articleStore = useArticleStore();
const selectedArticles = ref<ArticleIdType[]>([])

onMounted(() => {
  articleStore.refresh()
})

const handleSelect = (id: ArticleIdType) => {
  const articleIndex = selectedArticles.value.findIndex((selectedId: string) => id === selectedId);
  if(-1 === articleIndex){
    selectedArticles.value.push(id)
  }else{
    selectedArticles.value.splice(articleIndex, 1)
  }
}

const handleDelete = async () => {
  await articleStore.remove(selectedArticles.value)
  selectedArticles.value = []
}

const handleRefresh = async () => {
  await articleStore.refresh()
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <AsyncBtn icon="fa-rotate-right" :action="handleRefresh" title="Rafraichir"/>
        <RouterLink class="button" :to="{name : `${stockRoutePrefix}.add`}">
          <FaIcon icon="fa-plus" />
        </RouterLink>
        <AsyncBtn icon="fa-trash-can" :action="handleDelete" v-show="selectedArticles.length" title="Supprimer"/>
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
        <tr v-for="(article, index) in articleStore.articles" :key="article.id" @click="handleSelect(article.id)" :class="{selected: selectedArticles.includes(article.id)}">
          <ArticleCells v-model="articleStore.articles[index]"/>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>


<style scoped>
nav {
  display: flex;
  column-gap: 5px;
}

div.error {
  height: 2rem;
}

</style>
