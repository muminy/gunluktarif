import Card, { CardTypes } from "#/components/Card"
import Container from "#/components/Container"
import Repeater from "#/components/Repeater"
import { generateSeo } from "#/helper/metadata"
import { getAllRecipient } from "#/service/post"

export async function generateMetadata() {
  return generateSeo({})
}

export default async function Home() {
  const recipients = await getAllRecipient()
  const best = recipients.sort(
    (a, b) => b.commentCount - a.commentCount
  )

  return (
    <div className="w-full pb-10">
      <Container>
        <h1 className="lg:text-7xl text-4xl font-bold text-white mb-10 transition-all duration-500 ease-motion">
          <span className="block mb-2">En Leziz</span>
          <span className="block text-white/70">Yemek Tarifleri</span>
        </h1>

        <Repeater
          data={best.slice(0, 3)}
          className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-14"
          render={(item) => <Card {...item} type={CardTypes.Big} />}
        />

        <Repeater
          data={recipients}
          renderHeader={
            <h2 className="mb-6 lg:text-7xl text-4xl font-extrabold text-white">
              En Yeni <br /> Tariflerimiz
            </h2>
          }
          className="grid lg:grid-cols-2 grid-cols-1 gap-5"
          render={(item) => <Card {...item} type={CardTypes.Small} />}
        />
      </Container>
    </div>
  )
}
