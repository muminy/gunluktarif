"use client"

import Permalink from "#/components/Permalink"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/components/ui/avatar"
import { truncate } from "#/helper/string"
import { cn } from "#/lib/utils"
import Image from "next/image"
import { ICardProps } from ".."
import { defaultImage } from "#/constants/site"

export interface IBigCardProps extends Omit<ICardProps, "type"> {}
export default function BigCard({
  author,
  excerpt,
  image,
  title,
  slug,
}: IBigCardProps) {
  return (
    <Permalink
      href={`/tarif/${slug}`}
      className={cn(
        "w-full bg-secondary rounded-xl",
        "overflow-hidden",
        "hover-ring flex flex-col"
      )}
    >
      <Image
        className="h-[240px] w-full object-cover"
        src={image.sourceUrl}
        alt={image.title}
        title={image.title}
        width={300}
        height={240}
        placeholder="blur"
        blurDataURL={defaultImage}
      />
      <div className="px-8 py-8 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl text-white font-semibold mb-3">
            {title}
          </h2>
          <p className="mb-5">{truncate(excerpt, 100)}</p>
        </div>

        <div className="flex items-center space-x-4 mt-auto">
          <Avatar className="w-10 h-10 p-0.5 border-2 rounded-full">
            <AvatarImage
              className="rounded-full"
              src={author.avatar.url}
            />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>

          <span className="font-semibold">{author.name}</span>
        </div>
      </div>
    </Permalink>
  )
}
