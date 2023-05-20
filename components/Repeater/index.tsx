import { cn } from "#/lib/utils"
import { Fragment, ReactElement, ReactNode } from "react"

export interface IRepeaterProps<T> {
  data: T[]
  render(item: T, index: number): ReactNode
  renderEmpty?: ReactElement
  renderHeader?: ReactElement
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export default function Repeater<T>({
  data,
  render,
  className,
  renderEmpty,
  renderHeader,
  as: Wrapper = "div",
}: IRepeaterProps<T>) {
  const Empty = () => renderEmpty ?? null
  const Header = () => renderHeader ?? null

  return (
    <Fragment>
      <Header />
      {data.length === 0 ? (
        <Empty />
      ) : (
        <Wrapper className={cn(className)}>
          {data.map((item, index) => (
            <Fragment key={`${index}_render_fragment`}>
              {render(item, index)}
            </Fragment>
          ))}
        </Wrapper>
      )}
    </Fragment>
  )
}
