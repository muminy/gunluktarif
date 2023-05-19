import { getDate } from "#/helper/string"
import { CategoryType } from "#/types"
import Container from "../Container"
import Repeater from "../Repeater"
import Tag from "../Tag"
import Share from "./Share"

export interface IPostHeaderProps {
  title: string
  date: string
  categories: CategoryType[]
}
export default function PostHeader({
  categories,
  date,
  title,
}: IPostHeaderProps) {
  return (
    <Container size="sm" className="mb-10">
      <div className="mb-1">{getDate(date)}</div>
      <h1 className="font-semibold text-5xl text-white mb-5">
        {title}
      </h1>

      <Repeater
        className="gap-3 flex mb-5 flex-wrap"
        data={categories}
        render={(item) => <Tag slug={item.slug} title={item.name} />}
      />
    </Container>
  )
}
