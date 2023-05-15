import Card, { CardTypes } from "#/components/Card"
import Container from "#/components/Container"
import Repeater from "#/components/Repeater"

export default function CategoryPage() {
  return (
    <Container size="sm" className="pt-5">
      <Repeater
        data={[1, 2, 3, 1, 2, 3]}
        renderHeader={
          <div className="mb-8">
            <h1 className="text-xl text-white font-black">
              Sağlıklı Yaşam
            </h1>
            <p className="text-white/40">
              Sağlıklı Yaşam Kategorisine ait son tarifler.
            </p>
          </div>
        }
        className="grid grid-cols-1 gap-4"
        render={() => <Card type={CardTypes.Small} />}
      />
    </Container>
  )
}
