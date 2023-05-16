import { WPCommentType } from "./comment"

export type WPCategory = {
  categoryId: number
  name: string
  slug: string
  showmenu: boolean
  image: {
    node: {
      sourceUrl: string
      title: string
    }
  }
}

export type WPAuthor = {
  name: string
  description: string
  avatar: {
    url: string
  }
}
export type WPImage = {
  sourceUrl: string
  title: string
}

export type WPPost = {
  author: {
    node: WPAuthor
  }
  featuredImage?: {
    node: WPImage
  }
  categories: {
    nodes: WPCategory[]
  }
  comments: {
    nodes: WPCommentType[]
  }
  excerpt: string
  date: string
  commentCount: number
  ingredients: string
  kalori: number
  protein: number
  gram: number
  readingTime: number
  slug: string
  steps: string
  time: number
  title: string
  content: string
}
