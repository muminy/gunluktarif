import Footer from "../Footer"
import Header from "../Header"

export interface IContainerProps {
  children: React.ReactNode
}

export default function Layout({ children }: IContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-28 h-full">{children}</main>
      <Footer />
    </div>
  )
}
