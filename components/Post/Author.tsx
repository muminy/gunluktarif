import Button from "../Button"
import Container from "../Container"
import { Avatar, AvatarImage } from "../ui/avatar"

export default function Author() {
  return (
    <div className="border-b py-10">
      <Container size="sm">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://a.storyblok.com/f/198185/1472x1472/1d580d8d21/rui-sereno.png/m/100x100/" />
          </Avatar>
          <div>
            <div className="font-semibold text-xl text-white">
              Rui Sereno
            </div>
            <div className="font-medium">Managing Partner</div>
          </div>
        </div>

        <p className="mb-5">
          A long time ago, Rui decided to put his glory days as a
          Designer behind his back to embrace the Managing Partner
          role at Significa. He believes himself to be the deserving
          Significa 2020, 2021, and 2022 Cook-off champion and is
          having a hard time acknowledging the truth.
        </p>

        <Button>Detail</Button>
      </Container>
    </div>
  )
}
