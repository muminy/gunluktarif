import NotFound from "#/components/NotFound"
import { NotFoundMetaData } from "#/helper/metadata"
import { Metadata } from "next"

export const metadata: Metadata = NotFoundMetaData

export default function NotFoundPage() {
  return <NotFound />
}
