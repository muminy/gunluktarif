import { gql } from "@apollo/client"

export const COMMENT_FRAGMENTS = gql`
  fragment CommentFields on Comment {
    author {
      node {
        email
        name
      }
    }
    content
    commentId
    id
    status
    date
  }
`

export const MUTATION_CREATE_COMMENT = gql`
  ${COMMENT_FRAGMENTS}
  mutation CreateComment(
    $author: String
    $authorEmail: String
    $content: String!
    $commentOn: Int!
    $status: CommentStatusEnum = APPROVE
  ) {
    createComment(
      input: {
        author: $author
        authorEmail: $authorEmail
        content: $content
        commentOn: $commentOn
        status: $status
      }
    ) {
      comment {
        ...CommentFields
      }
    }
  }
`
