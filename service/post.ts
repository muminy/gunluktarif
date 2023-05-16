import { toPost } from "#/helper/mapper/post"
import client from "#/lib/apollo"
import { GET_POST_BY_SLUG, QUERY_POSTS } from "#/query/post"
import { WPPost } from "#/types/wordpress"
import { ApolloQueryResult } from "@apollo/client"
import { notFound } from "next/navigation"

export type PostResponse = {
  posts: {
    nodes: WPPost[]
  }
}

export type PostDetailResponse = {
  post: WPPost
}

export async function getAllRecipient() {
  try {
    const response: ApolloQueryResult<PostResponse> =
      await client.query({ query: QUERY_POSTS })
    return response.data.posts.nodes.map(toPost)
  } catch (e) {
    return []
  }
}

interface IPostDetailProps {
  slug: string
}
export async function getPostDetail(props: IPostDetailProps) {
  try {
    const response: ApolloQueryResult<PostDetailResponse> =
      await client.query({
        query: GET_POST_BY_SLUG,
        variables: {
          slug: props.slug,
        },
      })
    return toPost(response.data.post)
  } catch (e) {
    notFound()
  }
}
