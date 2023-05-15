import { cn } from "#/lib/utils"
import { cva } from "class-variance-authority"

export interface IContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "xl" | "large"
}

export default function Container({
  className,
  size,
  ...props
}: IContainerProps) {
  const variants = cva("container mx-auto", {
    variants: {
      size: {
        sm: "max-w-2xl",
        xl: "max-w-4xl",
        large: "max-w-6xl",
      },
    },
    defaultVariants: {
      size: "large",
    },
  })

  return (
    <div className={cn(variants({ size }), className)} {...props} />
  )
}
