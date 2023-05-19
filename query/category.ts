import { gql } from "@apollo/client"
import { FRAGMENTS_POST } from "./post"

const FRAGMENTS_CATEGORIES = gql`
  fragment CategoryFields on Category {
    categoryId
    count
    image {
      node {
        sourceUrl
        title
      }
    }
    showmenu
    name
    slug
  }
`

export const QUERY_CATEGORIES = gql`
  ${FRAGMENTS_CATEGORIES}
  query Categories {
    categories(first: 100) {
      nodes {
        ...CategoryFields
      }
    }
  }
`

export const GET_CATEGORY = gql`
  ${FRAGMENTS_CATEGORIES}
  ${FRAGMENTS_POST}
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      ...CategoryFields
      posts(first: 100) {
        nodes {
          ...PostFields
        }
      }
    }
  }
`
