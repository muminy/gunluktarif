import Container from "../Container"

export default function RecipeDetailSkeleton() {
  return (
    <Container size="sm" className="pt-10">
      <div className="h-3 w-1/4 mb-2 bg-secondary animate-pulse rounded-xl" />
      <div className="h-10 w-3/4 bg-secondary animate-pulse rounded-xl mb-10" />
      <div className="h-[300px] w-full bg-secondary animate-pulse rounded-xl mb-10" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
      <div className="h-6 w-3/4 bg-secondary animate-pulse rounded-xl mb-2" />
    </Container>
  )
}
