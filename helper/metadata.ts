import { defaultImage, domain } from "#/constants/site"
import type { Metadata } from "next"

const seo = {
  image: `${domain}${defaultImage}`,
  title: "Yemek tarifleri | GünlükTarif.com",
  description: "Günlük Yemek tarifleri",
  twitter: {
    site: "@gunluktarif",
    card: "summary_large_image",
  },
}

export interface GenerateSeoProp extends Metadata {
  image?: string
  url?: string
  title?: string
  description?: string
}

export async function generateSeo({
  title,
  description,
  image,
  url,
  authors,
  twitter,
  openGraph,
  ...props
}: GenerateSeoProp): Promise<Metadata> {
  return {
    title: title ?? seo.title,
    description: description ?? seo.description,
    authors,
    twitter: {
      images: image ?? seo.image,
      site: seo.twitter.site,
      card: "summary_large_image",
      title: title ?? seo.title,
      description: description ?? seo.description,
      ...twitter,
    },
    openGraph: {
      description: description ?? seo.description,
      title: title ?? seo.title,
      images: image ?? seo.image,
      type: "article",
      locale: url,
      url,
      siteName: domain,
      ...openGraph,
    },
    ...props,
  }
}

export const NotFoundMetaData = {
  title: "Bulamadık",
  robots: {
    follow: false,
    index: false,
  },
}
