import Repeater from "#/components/Repeater"
import { ComponentType } from "react"

export interface WithSkeletonProps {
  Component: ComponentType
}
const withLoading =
  (Component: React.ComponentType): React.FC =>
  () => {
    return (
      <Repeater
        data={[1, 2, 3, 4]}
        render={(item) => <Component key={`${item}_skeleton`} />}
      />
    )
  }

export default withLoading
