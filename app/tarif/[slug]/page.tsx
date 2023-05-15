import Container from "#/components/Container"
import { Author, Detail, Recipe, PostHeader } from "#/components/Post"

export default function Page() {
  return (
    <div className="pt-10">
      <PostHeader />

      <Container className="mb-10">
        <img
          className="w-full rounded-xl"
          src="https://a.storyblok.com/f/198185/3840x1920/ad87ae7a77/the-three-shephards-looking-up-to-our-lady-of-fatima.jpg/m/1440x0/"
        />
      </Container>

      <Container size="sm" className="mb-10">
        <Detail />
      </Container>

      <Recipe />
      <Author />
    </div>
  )
}
