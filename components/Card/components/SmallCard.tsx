"use client"

import Permalink from "#/components/Permalink"
import { truncate } from "#/helper/string"
import { cn } from "#/lib/utils"
import Image from "next/image"
import { ICardProps } from ".."
import { defaultImage } from "#/constants/site"

export interface ISmallCardProps extends Omit<ICardProps, "type"> {}
export default function SmallCard({
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
      <Image
        className="lg:h-24 h-[140px] lg:min-w-[96px] md:w-24 w-full mb-4 md:mb-0 object-cover rounded-xl"
        src={image.sourceUrl}
        title={image.title}
        alt={image.title}
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={defaultImage}
      />

      <div>
        <h2 className="font-semibold mb-3 text-white">{title}</h2>
        <p className="font-medium text-sm">
          {excerpt
            ? truncate(excerpt, 100)
            : "Tarif İçin İçeriğe Göz Atın"}
        </p>
      </div>
    </Permalink>
  )
}
