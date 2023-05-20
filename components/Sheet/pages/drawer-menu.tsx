import Permalink from "#/components/Permalink"
import Repeater from "#/components/Repeater"
import { use } from "react"
import SheetHeader from "../SheetHeader"
import { categoryFetch } from "#/service/category"

export default function DrawerMenu() {
  const categories = use(categoryFetch)
  return (
    <div className="px-6 py-4">
      <SheetHeader />
      <Repeater
        as="ul"
        renderHeader={
          <h1 className="text-xs mb-2 text-white/40 tracking-wider uppercase font-semibold">
            Kategoriler
          </h1>
        }
        className="gap-y-1 flex flex-col"
        render={(item) => (
          <li>
            <Permalink
              className="font-medium text-lg hover:text-white"
              href={`/kategori/${item.slug}`}
            >
              {item.name}
            </Permalink>
          </li>
        )}
        data={categories}
      />
    </div>
  )
}
