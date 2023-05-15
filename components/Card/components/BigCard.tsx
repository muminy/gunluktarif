"use client"

import Permalink from "#/components/Permalink"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/components/ui/avatar"
import { cn } from "#/lib/utils"

export default function BigCard() {
  return (
    <Permalink
      href={"/tarif/asd"}
      className={cn(
        "w-full bg-secondary rounded-xl",
        "overflow-hidden",
        "hover-ring"
      )}
    >
      <img
        className="h-[240px] w-full object-cover"
        src="https://gunluktarif.codejs.dev/wp-content/uploads/2023/02/dereotlu-pogaca-tarifi.jpg"
      />
      <div className="px-8 py-8">
        <h2 className="text-2xl text-white font-semibold mb-3">
          Free Stock Videos & Photos
        </h2>
        <p className="mb-5">
          We know that time is a valuable investment, so we’ve
          provided you with a free stock video and photo library.
        </p>

        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10 p-0.5 border-2 rounded-full">
            <AvatarImage
              className="rounded-full"
              src="https://a.storyblok.com/f/198185/1472x1472/3eb1893214/pedro-brandao.png/m/100x100/"
            />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>

          <span className="font-semibold">Eray Durmuş</span>
        </div>
      </div>
    </Permalink>
  )
}
