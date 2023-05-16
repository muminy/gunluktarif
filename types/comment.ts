export type CommentType = {
  status: boolean
  commentId: number
  content: string
  date: string
  author: { name: string; email: string }
}

export type CreateCommentType = {
  author: string
  authorEmail: string
  content: string
  commentOn: number
}

export type WPCommentType = Omit<CommentType, "author"> & {
  author: {
    node: {
      name: string
      email: string
    }
  }
}
