import { toPost } from "#/helper/mapper/post"
import client from "#/lib/apollo"
import { GET_CATEGORY, QUERY_CATEGORIES } from "#/query/category"
import { CategoryType } from "#/types"
import { WPPost } from "#/types/wordpress"
import { ApolloQueryResult } from "@apollo/client"
import { notFound } from "next/navigation"

export type CategoryListResponse = {
  categories: {
    nodes: CategoryType[]
  }
}

export type CategoryResponse = {
  category: CategoryType & {
    posts: {
      nodes: WPPost[]
    }
  }
}

export async function getCategories() {
  try {
    const response: ApolloQueryResult<CategoryListResponse> =
      await client.query({ query: QUERY_CATEGORIES })

    return response.data.categories.nodes
  } catch (e) {
    return []
  }
}

export interface ICategoryVars {
  slug: string
}
export async function getCategory(props: ICategoryVars) {
  try {
    const response: ApolloQueryResult<CategoryResponse> =
      await client.query({
        query: GET_CATEGORY,
        variables: { slug: props.slug },
      })

    const posts = response.data.category.posts.nodes.map(toPost)
    return {
      ...response.data.category,
      posts,
    }
  } catch (e) {
    notFound()
  }
}

export const categoryFetch = getCategories()
