import { WPAuthor, WPImage } from "#/types/wordpress"
import BigCard from "./components/BigCard"
import SmallCard from "./components/SmallCard"

export enum CardTypes {
  Small = "Small",
  Big = "Big",
}
export interface ICardProps {
  type?: keyof typeof CardTypes
  image: WPImage
  title: string
  excerpt: string
  slug: string
  author: WPAuthor
}
export default function Card({
  type = CardTypes.Big,
  ...props
}: ICardProps) {
  switch (type) {
    case CardTypes.Small:
      return <SmallCard {...props} />
    case CardTypes.Big:
    default:
      return <BigCard {...props} />
  }
}
