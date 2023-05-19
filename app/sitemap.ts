import { domain } from "#/constants/site"
import { getAllRecipient } from "#/service/post"
import dayjs from "dayjs"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllRecipient()

  const postMaps = posts.map((item) => ({
    url: `${domain}/tarif/${item.slug}`,
    lastModified: dayjs(item.date).format("YYYY-MM-DD"),
  }))

  return [
    {
      url: domain,
      lastModified: "2023-01-03",
    },
    ...postMaps,
  ]
}
