import { ILaw } from '@/src/data/data.types'

export const filter = (law: ILaw[], search: string) =>
  law.filter(
    (el) =>
      el.article.toLowerCase().includes(search.toLowerCase()) ||
      el.content.toLowerCase().includes(search.toLowerCase()),
  )
