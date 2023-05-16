import { cn } from "#/lib/utils"
import Permalink from "../Permalink"

export interface ITagProps {
  title: string
  slug: string
}
export default function Tag({ title, slug }: ITagProps) {
  return (
    <Permalink
      className={cn(
        "px-5 border py-2.5 rounded-xl flex space-x-2",
        "hover-ring text-sm text-white fill-white"
      )}
      href={`/kategori/${slug}`}
    >
      <span>{title}</span>
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
      </svg>
    </Permalink>
  )
}
