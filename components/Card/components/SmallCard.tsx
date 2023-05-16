"use client"

import Permalink from "#/components/Permalink"
import { truncate } from "#/helper/string"
import { cn } from "#/lib/utils"
import { ICardProps } from ".."

export interface ISmallCardProps extends Omit<ICardProps, "type"> {}
export default function SmallCard({
  author,
  image,
  title,
  excerpt,
  slug,
}: ISmallCardProps) {
  return (
    <Permalink
      href={`/tarif/${slug}`}
      className={cn(
        "w-full bg-secondary rounded-2xl",
        "overflow-hidden flex md:flex-row flex-col p-4 md:space-x-6 items-center",
        "hover-ring"
      )}
    >
      <img
        className="h-24 md:w-24 w-full mb-4 md:mb-0 object-cover rounded-xl"
        src={image.sourceUrl}
        alt={image.title}
      />

      <div>
        <h2 className="font-semibold mb-3 text-white">{title}</h2>
        <p className="font-medium text-sm text-white/30">
          {excerpt
            ? truncate(excerpt, 100)
            : "Tarif İçin İçeriğe Göz Atın"}
        </p>
      </div>
    </Permalink>
  )
}
