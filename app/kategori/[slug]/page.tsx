import Card, { CardTypes } from "#/components/Card"
import Container from "#/components/Container"
import Repeater from "#/components/Repeater"
import { domain } from "#/constants/site"
import { generateSeo } from "#/helper/metadata"
import { getCategory } from "#/service/category"
import { Metadata } from "next"

export interface ICategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ICategoryPageProps): Promise<Metadata> {
  const category = await getCategory({ slug: params.slug })

  return generateSeo({
    title: `${category.name} | Günlüktarif.com`,
    description: `${category.name} Kategorisine ait leziz yemek tarifleri`,
    url: `${domain}/${category.slug}`,
  })
}

export default async function CategoryPage({
  params,
}: ICategoryPageProps) {
  const category = await getCategory({ slug: params.slug })

  return (
    <Container size="sm" className="pt-5">
      <Repeater
        data={category.posts}
        renderHeader={
          <div className="mb-8">
            <h1 className="text-xl text-white font-black">
              {category.name}
            </h1>
            <p className="text-white/40">
              {category.name} Kategorisine ait son tarifler.
            </p>
          </div>
        }
        className="grid grid-cols-1 gap-4"
        render={(item) => <Card {...item} type={CardTypes.Small} />}
      />
    </Container>
  )
}
