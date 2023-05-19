import Container from "../Container"
import Repeater from "../Repeater"

function PostsSkeleton() {
  return (
    <Container size="sm" className="pt-10">
      <div className="h-8 w-1/4 mb-2 bg-secondary animate-pulse rounded-xl" />
      <div className="h-4 w-2/4 bg-secondary animate-pulse rounded-xl mb-14" />

      <Repeater
        data={[1, 2, 3, 4]}
        render={() => (
          <div className="h-36 w-full bg-secondary animate-pulse rounded-xl mb-5" />
        )}
      />
    </Container>
  )
}

export default PostsSkeleton
