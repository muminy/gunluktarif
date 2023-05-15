import { gql } from "@apollo/client"

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
    categories {
      nodes {
        ...CategoryFields
      }
    }
  }
`

export const QUERY_CATEGORY_BY_SLUG = gql`
  ${FRAGMENTS_CATEGORIES}
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      ...CategoryFields
    }
  }
`
