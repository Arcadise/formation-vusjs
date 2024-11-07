import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {Article, ArticleIdType, NewArticle} from "@/stock/interfaces/articles";
import {api} from "@/stock/article.api";

export const useArticleStore = defineStore('article', () =>  {
  const articles = ref<Article[]>([])

  const totalArticle = computed(() => articles.value.length)

  const refresh =  async () => {
    articles.value = await api.retrieveAll()
  }

  const add = async (newArticle : NewArticle) =>  {
    await api.add(newArticle)
    await refresh()
  }

  const remove = async  (ids: ArticleIdType[]) => {
    await api.remove([...ids])
    await refresh()
  }

  return {articles, totalArticle, refresh, add, remove}
})
