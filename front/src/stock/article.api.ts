import type {Article, ArticleIdType, NewArticle} from "@/stock/interfaces/articles";

const url = 'http://localhost:3000/api/articles'

class API {
  async add(newArticle: NewArticle): Promise<void> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newArticle),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.status >= 400) {
      throw new Error('error')
    }
  }

  async remove(ids: ArticleIdType[]): Promise<void> {
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(ids),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.status >= 400) {
      throw new Error('error')
    }
  }

  async retrieveAll(): Promise<Article[]> {

    const response = await fetch(url)
    const articles: Article[] = await response.json()
    return articles
  }
}

export const api = new API()
