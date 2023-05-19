import Container from "../Container"
import Repeater from "../Repeater"

function HomeSkeleton() {
  return (
    <Container>
      <div className="h-14 w-1/4 mb-2 bg-secondary animate-pulse rounded-xl" />
      <div className="h-14 w-2/4 bg-secondary animate-pulse rounded-xl mb-14" />

      <Repeater
        data={[1, 2, 3, 4, 5, 6]}
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-14"
        render={() => (
          <div className="h-[300px] col-span-1 bg-secondary animate-pulse rounded-xl" />
        )}
      />
    </Container>
  )
}

export default HomeSkeleton
