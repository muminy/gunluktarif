import Container from "../Container"

export default function NotFound() {
  return (
    <Container className="text-center lg:h-[calc(100vh-300px)] h-full flex flex-col justify-center items-center mb-10">
      <h1 className="text-5xl font-black text-white">Bulamadıkkk</h1>
      <p>Aradığınız Sayfayı Maalesef Bulamadık</p>
    </Container>
  )
}
