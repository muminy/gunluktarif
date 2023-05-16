import { CommentType } from "./comment"
import { WPAuthor, WPImage } from "./wordpress"

export type CategoryType = {
  id: number
  name: string
  slug: string
  showmenu: boolean
  image: WPImage
}
export type MenuType = {
  href: string
  title: string
}

export type NameValue = {
  name: string
  value?: string | number
}

export type PostType = {
  commentCount: number
  date: string
  excerpt: string
  ingredients: NameValue[]
  nutritional: NameValue[]
  readingTime: number
  slug: string
  comments: CommentType[]
  steps: string[]
  time: number
  postId: number
  title: string
  content: string
  categories: CategoryType[]
  author: WPAuthor
  image: WPImage
}
