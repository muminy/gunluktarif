import { gql } from "@apollo/client"
import { COMMENT_FRAGMENTS } from "./comment"

export const FRAGMENTS_POST = gql`
  ${COMMENT_FRAGMENTS}
  fragment PostFields on Post {
    author {
      node {
        name
        description
        avatar {
          url
        }
      }
    }
    featuredImage {
      node {
        sourceUrl
        title
      }
    }
    categories {
      nodes {
        categoryId
        count
        image {
          node {
            sourceUrl
            title
          }
        }
        name
        slug
      }
    }
    comments {
      nodes {
        ...CommentFields
      }
    }
    postId
    date
    excerpt
    commentCount
    ingredients
    kalori
    protein
    gram
    readingTime
    slug
    steps
    time
    title
    content
  }
`

export const QUERY_POSTS = gql`
  ${FRAGMENTS_POST}
  query Posts {
    posts(first: 100) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_SEARCH_POSTS = gql`
  ${FRAGMENTS_POST}
  query SearchPosts($search: String) {
    posts(where: { search: $search }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${FRAGMENTS_POST}
  query PostsByCategoryId($id: Int!) {
    posts(where: { categoryId: $id }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  ${FRAGMENTS_POST}
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...PostFields
    }
  }
`
