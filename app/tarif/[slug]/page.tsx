import Container from "#/components/Container"
import { Author, Detail, Recipe, PostHeader } from "#/components/Post"
import { domain } from "#/constants/site"
import { generateSeo } from "#/helper/metadata"
import { getPostDetail } from "#/service/post"
import type { Metadata } from "next"

export interface IRecipePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: IRecipePageProps): Promise<Metadata> {
  const post = await getPostDetail({ slug: params.slug })

  return generateSeo({
    title: post.title,
    description: post.excerpt,
    url: `${domain}/${post.slug}`,
    image: post.image.sourceUrl,
    openGraph: {
      type: "article",
      publishedTime: post.date,
    },
  })
}

export default async function Page({ params }: IRecipePageProps) {
  const post = await getPostDetail({ slug: params.slug })

  return (
    <div className="pt-10">
      <PostHeader {...post} />

      <Container className="mb-10">
        <img
          className="w-full rounded-xl"
          src={post.image.sourceUrl}
          title={post.image.title}
        />
      </Container>

      <Container size="sm" className="mb-10">
        <Detail content={post.content} />
      </Container>

      <Recipe ingredients={post.ingredients} steps={post.steps} />
      <Author author={post.author} />
    </div>
  )
}
