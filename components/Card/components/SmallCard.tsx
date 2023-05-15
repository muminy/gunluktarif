"use client"

import Permalink from "#/components/Permalink"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/components/ui/avatar"
import { cn } from "#/lib/utils"

export default function SmallCard() {
  return (
    <Permalink
      href={"/tarif/sadas"}
      className={cn(
        "w-full bg-secondary rounded-2xl",
        "overflow-hidden flex p-4 space-x-4 items-center",
        "hover-ring"
      )}
    >
      <img
        className="h-24 rounded-xl"
        src="https://a.storyblok.com/f/198185/3840x1920/ad87ae7a77/the-three-shephards-looking-up-to-our-lady-of-fatima.jpg/m/200x160/"
      />

      <div>
        <h2 className="font-semibold text-white">
          Free Stock Videos & Photos
        </h2>
        <span className="font-medium text-sm text-white/30">
          Eray Gümüş
        </span>
      </div>
    </Permalink>
  )
}
