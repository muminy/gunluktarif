import { shareList } from "#/constants/share"
import { cn } from "#/lib/utils"
import Container from "../Container"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function Share() {
  return (
    <Container className="py-10">
      <Repeater
        renderHeader={
          <h6 className="text-white font-semibold mb-2">Paylaş</h6>
        }
        className="flex items-center space-x-4 flex-wrap"
        data={shareList}
        render={(item) => (
          <Permalink
            className={cn(
              "bg-secondary rounded-xl text-center fill-white",
              "py-2.5 px-5 hover-ring center-center space-x-3"
            )}
            href={"/"}
          >
            <svg
              width={18}
              height={18}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d={item.path} />
            </svg>
            <span>{item.title}</span>
          </Permalink>
        )}
      />
    </Container>
  )
}
