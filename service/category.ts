import { toCategory } from "#/helper/mapper/category"
import { toPost } from "#/helper/mapper/post"
import client from "#/lib/apollo"
import { GET_CATEGORY, QUERY_CATEGORIES } from "#/query/category"
import { CategoryType } from "#/types"
import { WPCategory, WPPost } from "#/types/wordpress"
import { ApolloQueryResult } from "@apollo/client"
import { notFound } from "next/navigation"

export type CategoryListResponse = {
  categories: {
    nodes: WPCategory[]
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

    return response.data.categories.nodes.map(toCategory)
  } catch (e) {
    console.log("asasdasdasdasdasda")
    return []
  }
}

export interface ICategoryVars {
  slug: string
}
export async function getCategory(props: ICategoryVars) {
  const response: ApolloQueryResult<CategoryResponse> =
    await client.query({
      query: GET_CATEGORY,
      variables: { slug: props.slug },
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    })

  if (!response.data.category) {
    return null
  }

  const posts = response.data.category.posts.nodes.map(toPost)
  return {
    ...response.data.category,
    posts,
  }
}

export const categoryFetch = getCategories()
