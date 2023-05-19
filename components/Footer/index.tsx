import Container from "../Container"
import Logo from "../Logo"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function Footer() {
  return (
    <footer className="py-10 mt-auto border-t bg-background">
      <Container className="flex lg:flex-row flex-col items-center justify-between">
        <Logo className="lg:mb-0 mb-4" size={28} />

        <Repeater
          data={[
            { title: "Hakkımızda", to: "/hakkimizda" },
            {
              title: "Gizlilik Politikası",
              to: "/gizlilik-politikasi",
            },
            // { title: "İletişim", to: "/" },
          ]}
          as="ul"
          className="flex lg:flex-row flex-col lg:gap-4 gap-2 items-center"
          render={(item) => (
            <li>
              <Permalink
                className="link whitespace-nowrap"
                href={item.to}
              >
                {item.title}
              </Permalink>
            </li>
          )}
        />
      </Container>
    </footer>
  )
}
