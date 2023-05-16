import { WPAuthor } from "#/types/wordpress"
import Button from "../Button"
import Container from "../Container"
import { Avatar, AvatarImage } from "../ui/avatar"

export interface IAuthorProps {
  author: WPAuthor
}
export default function Author({
  author: { avatar, description, name },
}: IAuthorProps) {
  return (
    <div className="border-b py-10">
      <Container size="sm">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="Author Image" src={avatar.url} />
          </Avatar>
          <div>
            <div className="font-semibold text-xl text-white">
              {name}
            </div>
            <div className="font-medium">İçerik Editörü</div>
          </div>
        </div>

        <p>{description ?? "Henüz Açıklama Girilmedi."}</p>

        {/* <Button>Detail</Button> */}
      </Container>
    </div>
  )
}
