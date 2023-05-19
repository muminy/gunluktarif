import { cn } from "#/lib/utils"
import Link, { LinkProps } from "next/link"

export interface IPermalinkProps extends LinkProps {
  className?: string
  children?: React.ReactNode
}
export default function Permalink({
  href,
  className,
  ...props
}: IPermalinkProps) {
  return (
    <Link
      passHref={false}
      href={href}
      className={cn(className)}
      {...props}
    />
  )
}
