import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Article, NewArticle} from "@/stock/interfaces/articles";

export const useArticleStore = defineStore('article', () =>  {
  const articles = ref<Article[]>(
    [
      {
        id: 1,
        name: 'Name1',
        price: 1.25,
        qty: 5
      },
      {
        id: 2,
        name: 'Name2',
        price: 1.40,
        qty: 6
      },
      {
        id: 3,
        name: 'Name3',
        price: 1.62,
        qty: 1
      },
    ]
  )

  const totalArticle = computed(() => articles.value.length)

  const refresh =  () => {}

  const add = async (newArticle : NewArticle) =>  {
    articles.value.push({
      id: Math.max(...articles.value.map(article => article.id)) + 1,
      ...newArticle
    })
  }

  const remove = async  (ids: Article['id'][]) => {
    articles.value = articles.value.filter((article) => !ids.includes(article.id))
  }

  return {articles, totalArticle, refresh, add, remove}
})
