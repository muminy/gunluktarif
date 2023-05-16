"use client"

import { shareList } from "#/constants/share"
import { cn } from "#/lib/utils"
import Container from "../Container"
import Repeater from "../Repeater"

export enum Socials {
  "twitter" = "twitter",
  "facebook" = "facebook",
}

export interface IShareProps {
  title: string
}

export default function Share({ title }: IShareProps) {
  const getLink = (social: Socials) => {
    const link = window.location.href

    switch (social) {
      case Socials.twitter:
        return `http://www.twitter.com/share?url=${link}&text=${title}`
      case Socials.facebook:
      default:
        return `https://www.facebook.com/sharer/sharer.php?u=${link}`
    }
  }

  const shareLink = (social: Socials) => {
    window.open(getLink(social), "_target")
  }

  return (
    <Repeater
      renderHeader={
        <h6 className="text-white font-semibold mb-2">Paylaş</h6>
      }
      className="flex items-center gap-x-4 flex-wrap"
      data={shareList}
      render={(item) => (
        <button
          className={cn(
            "bg-secondary rounded-xl text-center fill-white",
            "py-2.5 px-5 hover-ring center-center space-x-3"
          )}
          onClick={() => shareLink(item.type as Socials)}
        >
          <svg
            width={18}
            height={18}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d={item.path} />
          </svg>
          <span>{item.title}</span>
        </button>
      )}
    />
  )
}
