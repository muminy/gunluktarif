import { use } from "react"
import Permalink from "../Permalink"
import Repeater from "../Repeater"
import categories from "#/constants/categories.json"

export default function Navigations() {
  return (
    <Repeater
      as="ul"
      data={categories.filter((item) => item.showmenu)}
      render={(item) => (
        <li>
          <Permalink
            className={
              "link font-semibold text-white whitespace-nowrap"
            }
            href={`/kategori/${item.slug}`}
          >
            {item.name}
          </Permalink>
        </li>
      )}
      className="lg:flex items-center space-x-5 hidden"
    />
  )
}
