import client from "#/lib/apollo"
import { QUERY_CATEGORIES } from "#/query/category"
import { CategoryType } from "#/types"
import { ApolloQueryResult } from "@apollo/client"

export type CategoryResponse = {
  categories: {
    nodes: CategoryType[]
  }
}
export async function getCategories() {
  try {
    const response: ApolloQueryResult<CategoryResponse> =
      await client.query({ query: QUERY_CATEGORIES })

    return response.data.categories.nodes
  } catch (e) {
    return []
  }
}
