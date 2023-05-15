import { Fragment } from "react"

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Fragment>{children}</Fragment>
}
