import { cn } from "#/lib/utils"
import Link, { LinkProps } from "next/link"

export interface IPermalinkProps extends LinkProps {
  className?: string
  children?: React.ReactNode
  label?: string
}
export default function Permalink({
  href,
  className,
  label,
  ...props
}: IPermalinkProps) {
  return (
    <Link
      passHref={false}
      href={href}
      aria-label={label}
      className={cn(className)}
      {...props}
    />
  )
}
