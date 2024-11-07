export interface Article {
  id: number,
  name: string,
  price: number,
  qty: number
}

export type NewArticle = Omit<Article, 'id'>
