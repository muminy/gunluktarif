"use client"

import { useSiteContext } from "#/context/Site"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function Navigations() {
  const { categories } = useSiteContext()

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
