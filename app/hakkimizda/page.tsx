import Container from "#/components/Container"
import Logo from "#/components/Logo"
import { generateSeo } from "#/helper/metadata"

export async function generateMetadata() {
  return generateSeo({
    title: "Hakkımızda | Günlüktarif.com",
    description: "Günlüktarif.com Hakkımızda",
  })
}

export default function AboutUs() {
  return (
    <Container
      size="sm"
      className="flex flex-col justify-center items-center"
    >
      <Logo size={32} />
      <p className="text-center max-w-xl mt-5">
        Günlük Tarif, lezzetli ve pratik yemek tarifleri sunan bir web
        sitesidir. Sitemizde her gün yeni tarifler paylaşıyoruz, her
        seviyede yemek yapanlar için uygun olan tarifler
        bulunmaktadır. Günlük Tarif, yemek yapmayı keyifle ve
        kolaylaştırmak için burada.
      </p>
    </Container>
  )
}
