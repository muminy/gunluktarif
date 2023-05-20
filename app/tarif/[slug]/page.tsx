import Container from "#/components/Container"
import {
  Author,
  Detail,
  Recipe,
  PostHeader,
  Share,
} from "#/components/Post"
import { domain } from "#/constants/site"
import { NotFoundMetaData, generateSeo } from "#/helper/metadata"
import { getPostDetail } from "#/service/post"
import { notFound } from "next/navigation"

export interface IRecipePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: IRecipePageProps) {
  const post = await getPostDetail({ slug: params.slug })

  if (!post) {
    return NotFoundMetaData
  }

  return generateSeo({
    title: `${post.title} | Günlük Yemek Tarifleri.`,
    description: post.excerpt,
    url: `${domain}/${post.slug}`,
    image: post.image.sourceUrl,
    openGraph: {
      type: "article",
      publishedTime: post.date,
    },
  })
}

export const revalidate = 60
export default async function Page({ params }: IRecipePageProps) {
  const post = await getPostDetail({ slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <article className="pt-10">
      <PostHeader {...post} />

      <Container className="mb-10">
        <img
          className="w-full rounded-xl max-h-[500px] object-cover"
          src={post.image.sourceUrl}
          title={post.image.title}
        />
      </Container>

      <Container size="sm" className="mb-10">
        <Detail content={post.content} />
        <Share title={post.title} />
      </Container>

      <Recipe ingredients={post.ingredients} steps={post.steps} />
      <Author author={post.author} />
    </article>
  )
}
