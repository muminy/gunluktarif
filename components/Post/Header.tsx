import { shareList } from "#/constants/share"
import { getDate } from "#/helper/string"
import { cn } from "#/lib/utils"
import { CategoryType } from "#/types"
import { WPImage } from "#/types/wordpress"
import Button from "../Button"
import Container from "../Container"
import Permalink from "../Permalink"
import Repeater from "../Repeater"
import Tag from "../Tag"

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

      <Repeater
        renderHeader={
          <h6 className="text-white font-semibold mb-2">Paylaş</h6>
        }
        className="flex items-center gap-3 flex-wrap"
        data={shareList}
        render={(item) => (
          <Permalink
            className={cn(
              "bg-secondary rounded-xl text-center fill-white",
              "py-2.5 px-5 hover-ring center-center space-x-3"
            )}
            href={"/"}
          >
            <svg
              width={18}
              height={18}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d={item.path} />
            </svg>
            <span>{item.title}</span>
          </Permalink>
        )}
      />
    </Container>
  )
}
