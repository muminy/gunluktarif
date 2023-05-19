"use client"

import Permalink from "#/components/Permalink"
import Repeater from "#/components/Repeater"
import { useSiteContext } from "#/context/Site"
import SheetHeader from "../SheetHeader"

export default function DrawerMenu() {
  const { categories } = useSiteContext()
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
