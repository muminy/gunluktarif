import BigCard from "./components/BigCard"
import SmallCard from "./components/SmallCard"

export enum CardTypes {
  Small = "Small",
  Big = "Big",
}
export interface ICardProps {
  type?: keyof typeof CardTypes
}
export default function Card({ type = CardTypes.Big }: ICardProps) {
  switch (type) {
    case CardTypes.Small:
      return <SmallCard />
    case CardTypes.Big:
    default:
      return <BigCard />
  }
}
