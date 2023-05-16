import { CommentType, WPCommentType } from "#/types/comment"

export function toComment(items: WPCommentType[]): CommentType[] {
  return items.map(({ author, ...props }) => ({
    ...props,
    author: { ...author.node },
  }))
}
